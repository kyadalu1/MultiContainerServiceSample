const express = require("express");
const Info = require("../models/Info");

const router = express.Router();

router.get("/getRandomNumber", async (req, res) => {
  const randNumber = `${Math.random() * 100}`;
  const info = new Info({ randomNumber: randNumber });
  await info.save();
  const lastInfo = await Info.findOne({
    where: { randomNumber: randNumber },
  });

  return res.status(200).send({ lastInfo });
});

module.exports = router;
