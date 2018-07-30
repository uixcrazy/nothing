const DATA = {
  "$id": "https://example.com/person.schema.json",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Person",
  "type": "object",
  "properties": {
    "firstName": {
      "type": "string",
      "description": "The person's first name."
    },
    "lastName": {
      "type": "string",
      "description": "The person's last name."
    },
    "age": {
      "description": "Age in years which must be equal to or greater than zero.",
      "type": "integer",
      "minimum": 0
    },
    "photoUrl": {
      "type": "string",
      "chance": {
        "pickone": [[
          "link1",
          "link2",
          "link3",
          "link4",
          "link5"
        ]]
      }
    },
    'urls': {
      "type": "object",
      "properties": {
        "full": {
          "type": "string",
          "chance": {
            "pickone": [["link1","link2","link3","link4","link5"]]
          }
        },
        "raw": {
          "type": "string",
          "chance": {
            "pickone": [["link1","link2","link3","link4","link5"]]
          }
        },
        "regular": {
          "type": "string",
          "chance": {
            "pickone": [["link1","link2","link3","link4","link5"]]
          }
        },
        "small": {
          "type": "string",
          "chance": {
            "pickone": [["link1","link2","link3","link4","link5"]]
          }
        },
        "thumb": {
          "type": "string",
          "chance": {
            "pickone": [["link1","link2","link3","link4","link5"]]
          }
        }
      },
      required: ["full","raw","regular","small","thumb"],
    },
    "avatar": {
      "type": "string",
      "faker": "image.imageUrl"
    }
  },
  "required": ["firstName", "lastName", "age", "photoUrl", "urls", "avatar"]
}
export default DATA;


// document
// khai báo biến bằng: $ref, definitions
// Option: https://github.com/json-schema-faker/json-schema-faker#supported-keywords
// Types: ALL_TYPES = ['array', 'object', 'integer', 'number', 'string', 'boolean', 'null'];
// Extend: https://github.com/json-schema-faker/json-schema-faker#extending-dependencies
