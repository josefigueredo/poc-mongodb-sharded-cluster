sh.disableBalancing("WncDB.Client")

printjson("Add Zones to Router");

sh.addShardToZone("rs-shard-gdpr", "GDPR")
sh.addShardToZone("rs-shard-rotw", "ROTW")

printjson("Update Zone Ranges on Router");

sh.updateZoneKeyRange(
    "WncDB.Client",
    { country: "AR" },
    { country: "AR_" },
    "ROTW"
)

sh.updateZoneKeyRange(
    "WncDB.Client",
    { country: "ES" },
    { country: "ES_" },
    "GDPR"
)

sh.updateZoneKeyRange(
    "WncDB.Client",
    { country: "MX" },
    { country: "MX_" },
    "ROTW"
)

sh.updateZoneKeyRange(
    "WncDB.Client",
    { country: "PE" },
    { country: "PE_" },
    "ROTW"
)

sh.updateZoneKeyRange(
    "WncDB.Client",
    { country: "UY" },
    { country: "UY_" },
    "ROTW"
)

printjson("Enable Sharding")

sh.enableSharding("WncDB")

printjson("Shard Collection")

sh.shardCollection(
    "WncDB.Client",
    {
        country: 1
    }
)

sh.enableBalancing("WncDB.Client")
