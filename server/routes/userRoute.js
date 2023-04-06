const express = require("express");
const { User } = require("../modal/userModal.js");
const multer = require("multer");
const WebSocket = require("ws");

const router = express.Router();

const ws = new WebSocket.Server({ port: 8000 });

// img storage path

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

// create user

router.post("/register", upload.single("productImage"), (req, res) => {
  var user = new User({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    image: req.file.filename,
  });

  user
    .save()
    .then(async (doc) => {
      res.status(201).json({
        message: "Created Successfully",
        data: doc,
      });

      const user = await User.find();

      if (user) {
        ws.clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(user));
          }
        });
      }
    })
    .catch((err) => {
      res.status(404).json({
        message: err.message,
      });
    });
});

module.exports = router;
