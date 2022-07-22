"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unauthorizedError = exports.notFoundError = exports.conflictError = void 0;

const unauthorizedError = message => {
  return {
    status: 401,
    message
  };
};

exports.unauthorizedError = unauthorizedError;

const conflictError = message => {
  return {
    status: 409,
    message
  };
};

exports.conflictError = conflictError;

const notFoundError = message => {
  return {
    status: 404,
    message
  };
};

exports.notFoundError = notFoundError;