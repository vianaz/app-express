"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NameController = void 0;

class NameController {
  static async getName(req, res) {
    res.send("Hello World");
  }

}

exports.NameController = NameController;