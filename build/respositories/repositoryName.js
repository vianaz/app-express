"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NameRepository = void 0;

var _factory = require("factories/factory");

class NameRepository {
  static getTableName(table) {
    const {
      query
    } = new _factory.NameFactory(table);
    return query.findMany();
  }

}

exports.NameRepository = NameRepository;