"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NameRouter = void 0;

var _controller = require("../controllers/controller");

var _express = require("express");

class NameRouter {
  constructor() {
    this.nameRouter = (0, _express.Router)();
    this.buildRoutes();
  }

  buildRoutes() {
    const {
      nameRouter
    } = this;
    nameRouter.get("/", _controller.NameController.getName);
  }

}

exports.NameRouter = NameRouter;