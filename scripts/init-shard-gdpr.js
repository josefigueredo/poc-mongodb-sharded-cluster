rs.initiate(
    {
        _id: "rs-shard-gdpr",
        version: 1,
        members: [
            {
                _id: 0,
                host: "rs-shard-gdpr-a:27017",
                priority: 1
            },
            {
                _id: 1,
                host: "rs-shard-gdpr-b:27017",
                priority: 0.5
            },
            {
                _id: 2,
                host: "rs-shard-gdpr-c:27017",
                priority: 0.5
            },
        ]
    },
    {
        force: true
    }
)