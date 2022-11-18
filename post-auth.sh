#!/bin/sh

# 1
docker-compose up -d

# 2
docker-compose exec configsvr01 sh -c "mongosh < /scripts/init-config-server.js"
docker-compose exec rs-shard-gdpr-a sh -c "mongosh < /scripts/init-shard-gdpr.js"
docker-compose exec rs-shard-rotw-a sh -c "mongosh < /scripts/init-shard-rotw.js"

# 3
echo "Waiting for 30 seconds for the shards to be ready"
sleep 30
docker-compose exec router01 sh -c "mongosh < /scripts/init-router.js"

# Auth
docker-compose exec configsvr01 bash "/scripts/auth.sh"

docker-compose exec rs-shard-gdpr-a bash "/scripts/auth.sh"
docker-compose exec rs-shard-rotw-a bash "/scripts/auth.sh"

# 4
docker-compose exec router01 mongosh --port 27017 -u "jose.figueredo" --authenticationDatabase admin
> load('/scripts/post-init-router.js')

# 5
python3 inserter-auth.py

# 6
docker-compose exec rs-shard-gdpr-a mongosh --port 27017 -u "jose.figueredo" --authenticationDatabase admin
> load('/scripts/query-shard-gdpr.js')

# 7
docker-compose exec rs-shard-rotw-a mongosh --port 27017 -u "jose.figueredo" --authenticationDatabase admin
> load('/scripts/query-shard-rotw.js')

# 8 Cleanup

#docker-compose down -v
