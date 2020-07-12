"use strict";

import express from "express";
const router = express.Router();

/* GET home page. */
router.get("/", function (req: any, res: any) {
  res.send("This is root.");
});

export default router;
