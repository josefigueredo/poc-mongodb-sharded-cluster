#!/bin/bash

mongosh <<EOF
use admin;
db.createUser({user: "jose.figueredo", pwd: "jfwnc", roles:[{role: "root", db: "admin"}]});
exit;
EOF