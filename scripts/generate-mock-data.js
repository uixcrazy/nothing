/* This script generates mock data for local development.
   This way you don't have to point to an actual API,
   but you can enjoy realistic, but randomized data,
   and rapid page loads due to local, static data.
 */

import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

import jsf from 'json-schema-faker';
import faker from 'faker';
import Chance from 'chance';

import POST_LIST_SCHEMA from '../src/assets/json-schema-faker/blog-post-list';

jsf.extend('faker', () => faker);
jsf.extend('chance', () => new Chance());

/**
 * Read all files at: ../src/assets/json-schema-faker
 * *-*-*-*-* but not have prefix _
 */
const dirFaker = 'src/assets/json-schema-faker';
const files = fs.readdirSync(dirFaker);

if (files && files.length > 0) {
  files.map(filename => {

    const dirUrl = path.join(__dirname, '..', dirFaker, filename);
    const jsonSchema = require(dirUrl).default;
    console.log(chalk.yellow(JSON.stringify(jsonSchema, null, 2)));


    // const dirname = path.join(dirFaker, filename);
    // fs.readFile(dirname, (err, rawdata) => {
    //   if (err) throw err;
    //   if (rawdata) {
    //     const data = rawdata.toString('utf8');
    //     console.log(rawdata.toString('utf8'))
    //     jsf.resolve(JSON.parse(data)).then(function(result) {
    //       console.log(JSON.stringify(result, null, 2))
    //     })
    //   }
    // });
  });
}

    // var schema = fs.readFileSync(dirname, 'utf8');
//     fs.readFile(dirname, (err, schema) => {
//       if (err) {
//         // throw err;
//         console.log(chalk.red(schema));
//       }
//       if (schema) {
//         // console.log(chalk.cyan(schema));
//         jsf.resolve(schema).then(function(result) {
// console.log(JSON.stringify(result, null, 2))

//           // fs.writeFile(path.join(__dirname, '../__mocks__/mock-data', filename.slice(0, filename.length-3) + '.json'), JSON.stringify(result, null, 2), function (err) {
//           //   if (err)
//           //     throw err;
//           // });
//         });
//       }
//     });



