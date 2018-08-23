import { IMAGE } from './re-project-item-image';
export const ITEMS = {
  type: "object",
  properties: {
    id: {
      type: "integer",
      minimum: 0,
      exclusiveMinimum: true
    },
    name: {
      type: "string",
      faker: "commerce.productName"
    },
    description: {
      type: "string",
      faker: "lorem.paragraphs"
    },
    status: {
      type: "string",
      faker: "lorem.slug"
    },
    type: {
      type: "array",
      minItems: 1,
      maxItems: 3,
      items: {
        enum: [
          "Daisy",
          "athlete",
          "sprinter",
          "medball",
          "Wheel",
          "Raindrop",
          "apartment building",
          "architecture",
          "building",
          "aerial view",
          "bumble bee"
        ]
      },
    },
    investors: {
      type: "array",
      minItems: 1,
      maxItems: 3,
      items: {
        type: "integer",
        minimum: 1,
        maximum: 9,
      }
    },
    constructors: {
      type: "array",
      minItems: 1,
      maxItems: 3,
      items: {
        type: "integer",
        minimum: 1,
        maximum: 9,
      }
    },
    guarantor: {
      type: "integer",
      minimum: 1,
      maximum: 2,
    },
    location_latitude: {
      type: "string",
      chance: {
        latitude: {fixed: 6},
      },
    },
    location_longitude: {
      type: "string",
      chance: {
        longitude: {fixed: 6},
      },
    },
    investment_vnd_b: {
      type: "integer",
      minimum: 1000,
      maximum: 1000000,
    },
    date_construct: {
      type: "string",
      chance: {
        date: { year: 2018 },
      },
    },
    date_deliver: {
      type: "string",
      chance: {
        date: { year: 2020 },
      },
    },
    images: {
      type: "array",
      minItems: 1,
      maxItems: 3,
      items: IMAGE,
    },
    price_range_min:  {
      type: "integer",
      minimum: 1,
      maximum: 6,
    },
    price_range_max:  {
      type: "integer",
      minimum: 1,
      maximum: 10,
    },
    priority: null,
    createdAt: {
      type: "string",
      faker: "date.future"
    },
    updatedAt: {
      type: "string",
      faker: "date.future"
    },
    deletedAt: {
      type: "string",
      faker: "date.between"
    },
  },
  required: [
    "id",
    "name",
    "description",
    "status",
    "type",
    "investors",
    "constructors",
    "guarantor",
    "location_latitude",
    "location_longitude",
    "investment_vnd_b",
    "date_construct",
    "date_deliver",
    "images",
    "price_range_min",
    "price_range_max",
    "priority",
    "createdAt",
    "updatedAt",
    "deletedAt",
  ]
};

const ITEMS_REPROJECT = {
  "$id": "https://example.com/re-project-item.json",
  "$schema": "http://json-schema.org/draft-07/schema#",
  title: "re-project-item",
  type: "array",
  minItems: 7,
  maxItems: 7,
  items: ITEMS,
};

export default ITEMS_REPROJECT;

