/**
 * definitions
 */

import { RANDOM_IMAGE } from './_data-random';

export const IMAGE = {
  type: "object",
  properties: {
    id: {
      type: "integer",
      minimum: 0,
      exclusiveMinimum: true
    },
    filename: {
      type: "string",
      faker: "name.title",
    },
    urn:  {
      type: "string",
      faker: "random.image",
    },
    mimetype: {
      type: "string",
      chance: {
        pickone: [["image/jpeg", "image/png",]]
      }
    },
    meta: {
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
    status: {
      type: "integer",
      minimum: 1,
      maximum: 2,
    },
    createdAt: {
      type: "string",
      faker: "date.past"
    },
    updatedAt: {
      type: "string",
      faker: "date.recent"
    },
    deletedAt: {
      type: "string",
      faker: "date.future"
    },
    url: {
      type: "string",
      chance: {
        pickone: [RANDOM_IMAGE]
      },
    },
  },
  required: [
    "id",
    "filename",
    "urn",
    "mimetype",
    "meta",
    "status",
    "createdAt",
    "updatedAt",
    "deletedAt",
    "url",
  ]
};
