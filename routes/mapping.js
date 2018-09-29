var express = require("express");
var mapIt = require("../services/mapping");
var router = express.Router();

router.post("/", function(req, res) {
  const acctV1 = req.body[0];
  const acctV2 = req.body[1];
  const mapped = mapIt(acctV1, acctV2);
  res.send(mapped);
});

module.exports = router;
