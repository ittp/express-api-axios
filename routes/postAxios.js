var express = require("express");
var router = express.Router();
const axios = require("axios");
let db = require('better-sqlite3')("db.sqlite3")
let table = db.table({ name: "organization" })



let ycr = {
  "httpMethod": "POST",
  "headers": {
    Accept: '*/*'
  },//<словарь со строковыми значениями HTTP-заголовков>,
  "multiValueHeaders":[], //<словарь со списками значений HTTP-заголовков>,
  "queryStringParameters":[], //<словарь queryString-параметров>,
  "multiValueQueryStringParameters": [],//<словарь списков значений queryString-параметров>,
  "requestContext": [],//<словарь с контекстом запроса>,
  "body": [],//"<содержимое запроса>",
  "isBase64Encoded": false//<true или false>
}

/* GET /post */
router.get("/", function (req, res, next) {
  // Post a request for a user with a given ID
  axios
    .post("https://gw.ittps.ru/api/db", {
      data: {}
      organizationId: 34,
      locationId: 1
    })
    .then(function (response) {
      console.log(response);
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).send({ error: "something went wrong" });
    });
});

module.exports = router;
