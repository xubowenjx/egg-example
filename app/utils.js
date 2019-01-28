'use strict';
const Response = {
  success(obj) {
    return {
      code: '999990',
      msg: 'success',
      data: obj || {},
    };
  },
  fail(msg) {
    return {
      code: '000000',
      msg: 'success',
      data: 'faile' || msg,
    };
  },
};
module.exports = { Response };
