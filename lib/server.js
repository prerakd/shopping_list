"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _mongoKeys = _interopRequireDefault(require("../config/mongoKeys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); //Body parser middle ware

app.use(_bodyParser["default"].json());

_mongoose["default"].connect(_mongoKeys["default"].MONGO_URI).then(function () {
  console.log("=====> connected ====>");
})["catch"](function () {
  console.log("Oops!! something missed =====>");
}); // const MongoClient = require('mongodb').MongoClient;
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });