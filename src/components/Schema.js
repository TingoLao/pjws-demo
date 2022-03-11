
// Json schema
export const schema = {
    "nodes":{
        "title":"Nodes",
        "type":"object",
        "properties":{
            "name":{"type":"string"},
            "description":{"type":"string"},
            "category":{"type":"integer"},
            "symbolSize":{"type":"number"},
        },
        "required": [ "name", "category"]
    },
    "links":{
        "title":"Links",
        "type":"object",
        "properties":{
            "source":{"type":"string"},
            "target":{"type":"string"},
            "name":{"type":"string"},
            "des":{"type":"string"},
        },
        "required": [ "source","target","name"]
    }
}
