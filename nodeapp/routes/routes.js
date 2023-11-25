const express = require("express");
const Info = require("../models/Info");

const router = express.Router();

router.get("/api/value", async (req, res) => {
  return res.status(200).send({ value: "hello" });
});

router.get("/api/getRandomNumber", async (req, res) => {
  const randNumber = `${Math.random() * 100}`;
  const info = new Info({ randomNumber: randNumber });
  await info.save();
  const lastInfo = await Info.findOne({
    where: { randomNumber: randNumber },
  });

  const delayTime = 5000;

  // Introduce a delay using setTimeout
  setTimeout(() => {
    return res.status(200).send({ lastInfo });
  }, delayTime);
});

module.exports = router;
