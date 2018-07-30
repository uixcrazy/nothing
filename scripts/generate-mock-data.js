/**
 * This script generates mock data vs json-schema for local development.
 */

import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

import jsf from 'json-schema-faker';
import faker from 'faker';
import Chance from 'chance';
import removeKeys from '../src/assets/third-party/remove-keys';

jsf.extend('faker', () => faker);
jsf.extend('chance', () => new Chance());

/**
 * Read all files at: ../src/assets/json-schema-faker
 * *-*-*-*-* but not have prefix _
 */
const dirFaker = 'src/assets/json-schema-faker';
const dirJsonSchema = '__mocks__/json-schema';
const dirMockData = '__mocks__/mock-data';
const filenames = fs.readdirSync(dirFaker);

if (filenames && filenames.length > 0) {
  filenames.forEach(filename => {
    const dirUrl = path.join(__dirname, '..', dirFaker, filename);
    const jsonSchemaFake = require(dirUrl).default;
    // write
    if (jsonSchemaFake) {
      // write JSON Schema
      const pathJsonSchema = path.join(__dirname, '..', dirJsonSchema,
        filename.slice(0, filename.length-3) + '.json');

      fs.writeFile(pathJsonSchema, JSON.stringify(removeKeys(jsonSchemaFake, ['faker', 'chance']), null, 2), (err) => {
        if (err) {
          console.log(chalk.red(err));
          throw err;
        }
        console.log(chalk.yellow(`The file ***${chalk.cyan(pathJsonSchema)}*** has been saved!`));
      });

      // write mockData
      jsf.resolve(jsonSchemaFake).then(function(mockData) {
        const pathMockData = path.join(__dirname, '..', dirMockData,
          filename.slice(0, filename.length-3) + '.json');
        fs.writeFile(pathMockData, JSON.stringify(mockData, null, 2), (err) => {
          if (err) {
            console.log(chalk.red(err));
            throw err;
          }
          console.log(chalk.yellow(`The file ***${chalk.cyan(pathMockData)}*** has been saved!`));
        });
      });
    }
  });
}
