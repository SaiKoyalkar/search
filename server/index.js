var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var path = require("path");

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; // set our port

// create our router
var router = express.Router();

// middleware to use for all requests
router.use(function (req, res, next) {
  // do logging
  console.log("Something is happening.");
  next();
});

router
  .route("/items")
  // get all the items (accessed at GET http://localhost:8080/api/items)
  .get(function (req, res) {
    const items = [
      { name: "item1", timestamp: "20201201T12:30:00" },
      { name: "item2", timestamp: "20201202T12:30:00" },
      { name: "item3", timestamp: "20201208T12:30:00" },
      { name: "item6", timestamp: "20201204T12:30:00" },
      { name: "item8", timestamp: "20201205T12:30:00" },
    ];
    res.json(items);
  });

app.use('/', express.static(path.join(__dirname, "/public")));

// REGISTER OUR ROUTES -------------------------------
app.use("/api", router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log("Magic happens on port " + port);
