rs.initiate(
    {
        _id: "rs-shard-rotw",
        version: 1,
        members: [
            {
                _id: 0,
                host: "rs-shard-rotw-a:27017"
            },
            {
                _id: 1,
                host: "rs-shard-rotw-b:27017"
            },
            {
                _id: 2,
                host: "rs-shard-rotw-c:27017"
            },
        ]
    },
    {
        force: true
    }
)