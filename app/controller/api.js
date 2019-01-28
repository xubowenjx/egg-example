'use strict';
const Controller = require('egg').Controller;
const IndexService = require('../service/home');
const service = new IndexService('egg');
class Api extends Controller {
  async getUser() {
    // this.ctx.params
    // this.ctx.query
    // this.ctx.queries
    const id = this.ctx.params.id;
    this.ctx.logger.info('id = ' + id);
    this.ctx.body = await service.getUserById(id);
  }
}
module.exports = Api;
