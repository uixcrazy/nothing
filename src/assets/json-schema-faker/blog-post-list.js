import { RANDOM_IMAGE } from './_data-random';
const POST_LIST_SCHEMA = {
  type: "array",
  minItems: 5,
  maxItems: 5,
  items: {
    type: "object",
    properties: {
      id: {
        type: "integer",
        minimum: 0,
        exclusiveMinimum: true
      },
      createdAt: {
        type: "string",
        chance: {
          "date": {
            "string": true
          }
        }
      },
      title: {
        type: "string",
        faker: "lorem.sentence"
      },
      description: {
        type: "string",
        faker: "lorem.paragraphs"
      },
      photoUrl: {
        type: "string",
        chance: {
          pickone: [RANDOM_IMAGE]
        }
      },
      tags: {
        type: "array",
        minItems: 1,
        maxItems: 5,
        items: {
          type: "object",
          properties: {
            title: {
              type: "string",
              chance: {
                "word": {
                  "length": 5
                }
              }
            },
          },
          required: ["title"],
        },
      },
      author: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            minimum: 0,
            exclusiveMinimum: true
          },
          name: {
            "type": "string",
            "faker": "name.findName"
          },
          birthday: {
            "type": "string",
            "chance": {
              "birthday": {
                "string": true
              }
            }
          },
          email: {
            "type": "string",
            "format": "email",
            "faker": "internet.email"
          }
        },
        required: ["id", "name", "birthday", "email"],
      },
      link: {
        type: "string",
        faker: "image.imageUrl"
      }
    },
    required: ["id", "createdAt", "title", "description", "photoUrl", "tags", "author", "link"]
  }
}

export default POST_LIST_SCHEMA;
