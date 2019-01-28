'use strict';
const { Response } = require('../utils');
class IndexService {
  constructor(name) {
    this.name = name;
    console.log(`IndexService name = ${name}`);
  }
  async getUserById(id) {
    return await new Promise((resolve, reject) => {
      if (id) {
        console.log('into resolve');
        resolve(
          Response.success({
            name: 'xubowen',
            age: '22',
          })
        );
      } else {
        reject(Response.fail());
      }
    });
  }
}

module.exports = IndexService;
