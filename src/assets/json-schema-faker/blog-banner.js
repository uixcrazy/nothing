import { RANDOM_IMAGE } from './_data-random';
const BANNER_SCHEMA = {
  "$id": "https://example.com/blog/banner.json",
  "$schema": "http://json-schema.org/draft-07/schema#",
  title: "Banner",
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

export default BANNER_SCHEMA;
