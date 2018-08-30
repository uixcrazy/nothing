import { ITEMS, ITEMS_REPROJECT } from './re-project-item';
const REPROJECT = {
  "$id": "https://example.com/re-project.json",
  "$schema": "http://json-schema.org/draft-07/schema#",
  title: "re-project",
  type: "object",
  properties: {
    total: {
      type: 'integer',
      minimum: 20,
      maximum: 20,
    },
    limit: {
      type: 'integer',
      minimum: 10,
      maximum: 10,
    },
    skip: {
      type: 'integer',
      minimum: 0,
      maximum: 1,
    },
    data: {
      type: "array",
      minItems: 20,
      maxItems: 20,
      items: ITEMS
    },
  },
  required: ["total", "limit", "skip", "data"]
}
export default REPROJECT;