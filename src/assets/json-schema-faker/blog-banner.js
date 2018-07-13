import { RANDOM_IMAGE } from './_data-random';
export const BANNER_SCHEMA = {
  type: "array",
  minItems: 7,
  maxItems: 7,
  items: {
    type: "object",
    properties: {
      id: {
        type: "integer",
        minimum: 0,
        exclusiveMinimum: true
      },
      title: {
        type: "string",
        faker: "lorem.sentence"
      },
      photoUrl: {
        type: "string",
        chance: {
          pickone: [RANDOM_IMAGE]
        }
      },
      link: {
        type: "string",
        faker: "image.imageUrl"
      }
    },
    required: ["id", "title", "photoUrl", "link"]
  }
}

// document
// khai báo biến bằng: $ref, definitions
// Option: https://github.com/json-schema-faker/json-schema-faker#supported-keywords
// Types: ALL_TYPES = ['array', 'object', 'integer', 'number', 'string', 'boolean', 'null'];
// Extend: https://github.com/json-schema-faker/json-schema-faker#extending-dependencies



// urls: {
//   full: "https://images.unsplash.com/photo-1509838174235-432f709c7bfd?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjg2MDh9&s=0330fa2847ac55a6e24fd6865e70f1ef",
//   raw:"https://images.unsplash.com/photo-1509838174235-432f709c7bfd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjg2MDh9&s=7a1f1c13870c12b6852afcdd00885e69",
//   regular:"https://images.unsplash.com/photo-1509838174235-432f709c7bfd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjg2MDh9&s=8a44614d17e884db5430bd7abcab4ff2",
//   small:"https://images.unsplash.com/photo-1509838174235-432f709c7bfd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjg2MDh9&s=20bd7d354c2c7ea952d59d73a1169f43",
//   thumb:"https://images.unsplash.com/photo-1509838174235-432f709c7bfd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjg2MDh9&s=8a3aba35d943846c1aae73c4a9bf93a4",
// }


