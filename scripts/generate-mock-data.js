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

// const fs = require('fs');
// const path = require('path');
// const chalk = require('chalk');
// const jsf = require('json-schema-faker');
// const faker = require('faker');
// const Chance = require('chance');

// jsf.extend('faker', () => faker);
// jsf.extend('chance', () => new Chance());

// var mockDataSchema = require('./mockDataSchema');
// var json = '';
// jsf.resolve(mockDataSchema).then(function(result) {
//   json = JSON.stringify(result, null, 2);
// });


// fs.writeFile(path.join(__dirname, '..', "_mock-api/data/db.json"), json, function (err) {
//   if (err) {
//     return console.log(err);
//   } else {
//     console.log(chalk.yellow('ngoc NOGC') + chalk.cyan(json));
//   }
// });





