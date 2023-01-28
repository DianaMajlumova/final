const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const { Schema } = mongoose;
const userSchema = new Schema(
  {
    image: { type: String },
    title: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);
const users = mongoose.model("users", userSchema);
//GetUsers
app.get("/users", (req, res) => {
  users.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(404).json({ message: err });
    }
  });
});

//GetUserById
app.get("/users/:id", (req, res) => {
  let { id } = req.params;
  users.findById(id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      res.status(404).json({ message: err });
    }
  });
});
//Delete
app.delete("/users/:id", (req, res) => {
  let { id } = req.params;
  users.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.send("Deleted");
    } else {
      res.status(404).json({ message: err });
    }
  });
});
//Post
app.post("/users", (req, res) => {
  let user = new users({
    image: req.body.image,
    title: req.body.title,
    description: req.body.description,
  });
  user.save();
  res.send(user);
});

//Update
app.put("/users/:id", (res, req) => {
  let { id } = req.params;
  let user = {
    image: req.body.image,
    title: req.body.title,
    description: req.body.description,
  };
  users.findByIdAndUpdate(id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      res.status(404).json({ message: err });
    }
  });
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT;
const url = process.env.CONNECTION_URL.replace(
  "<password>",
  process.env.PASSWORD
);
mongoose.set("strictQuery", true);
mongoose.connect(url).then(() => console.log("CONNECTED"));
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
