'use strict';

const Controller = require('egg').Controller;
const IndexService = require('../service/home');
const service = new IndexService('egg');
class HomeController extends Controller {
  async index() {
    const user = await service.getUserById('id');
    console.log(user);
    const title = '我是首页'; // 向模板传入数据
    await this.ctx.render('index', {
      title,
      user: user.data,
    });
  }
}

module.exports = HomeController;
