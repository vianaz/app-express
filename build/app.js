"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _router = require("./routers/router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class App {
  constructor() {
    this.app = (0, _express.default)();
    this.middleware();
    this.buildRouter();
  }

  middleware() {
    this.app.use(_express.default.json());
    this.app.use((0, _cors.default)());
  }

  buildRouter() {
    const {
      app
    } = this;
    app.use(new _router.NameRouter().nameRouter);
  }

}

exports.App = App;