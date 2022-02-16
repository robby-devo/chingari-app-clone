// 93r86PgCaeVUBBBi
// mongodb+srv://Admin:<password>@cluster0.8mqob.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
import express from "express";

import mongoose from "mongoose";
// const express = require("express");
// const mongoose = require("mongoose");

import Data from "./data.js";
import Videos from "./dbModel.js";

// app config
const app = express();

const port = process.env.PORT || 9000;
// middlewares
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Headers", "*"),
    next();
});

// DB config
const connection_url =
  "mongodb+srv://Admin:93r86PgCaeVUBBBi@cluster0.8mqob.mongodb.net/chingari?retryWrites=true&w=majority";

mongoose.connect(connection_url);

// api endpoints
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.get("/v1/posts", (req, res) => {
  res.status(200).send(Data);
});
app.get("/v2/posts", (req, res) => {
  Videos.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
app.post("/v2/posts", (req, res) => {
  // post req is to add data to the database,it will let us add a video doc to the videos collection
  const dbVideos = req.body;
  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
