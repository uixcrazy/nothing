import React, { Component } from 'react';
import NoContent from '../components/NoContent';
import SiteMain from '../components/layout/SiteMain';
import PageTitle from '../components/layout/PageTitle';

// var jsf = require('json-schema-faker');
import jsf from 'json-schema-faker';

export default class AboutUsPage extends Component {
  constructor(props) {
    super(props);
    var schema = {
      type: 'object',
      properties: {
        user: {
          type: 'object',
          properties: {
            id: {
              $ref: '#/definitions/positiveInt'
            },
            name: {
              type: 'string',
              faker: 'name.findName'
            },
            email: {
              type: 'string',
              format: 'email',
              faker: 'internet.email'
            }
          },
          required: ['id', 'name', 'email']
        }
      },
      required: ['user'],
      definitions: {
        positiveInt: {
          type: 'integer',
          minimum: 0,
          exclusiveMinimum: true
        }
      }
    };

    jsf.resolve(schema).then(function(sample) {
      console.log(sample);
      // "[object Object]"

      console.log(sample.user.name);
      // "John Doe"
    });
  }
  render() {
    return (
      <SiteMain>
        <PageTitle>About Us</PageTitle>
        <NoContent />
      </SiteMain>
    );
  }
}
