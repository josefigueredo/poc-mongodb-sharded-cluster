import random
from pymongo import MongoClient

DB_CONNECTION_URL = 'mongodb://jose.figueredo:jfwnc@127.0.0.1:27117,127.0.0.1:27118/?authMechanism=DEFAULT'

try:
    conn = MongoClient(DB_CONNECTION_URL)
    print("Connected")
except Exception as e:
    print("Could not connect to MongoDB", str(e))

# database
db = conn.WncDB

# Created or Switched to collection names: Client
collection = db.Client

for i in range(10):
    emp_rec = {
        "country": random.choice(["AR", "ES", "MX", "PE", "UY"]),
        "name": str(random.randint(1, 1000)),
    }

    # Insert Data
    rec_id = collection.insert_one(emp_rec)
    print("Data inserted with record ids", rec_id)

# Printing the data inserted
for record in collection.find():
    print(record)
