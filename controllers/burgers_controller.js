var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burgers = require("../models/burgers.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burgers.all(function(data) {
    //this data is the result of the select all from cb func of ORM
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    //response.json() - send back to the client the json object format
    //response.send() - send back to the client json object format or html
    //response.render() - send back to only handlbars 
//response.sendFile() - send back to the client the entire html file
    //res.json(data)
     res.render("index", hbsObject);
  });
});

router.post("/burgers", function(req, res) {
                    // burger name , devoured"
  burgers.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

 burgers.update(
    {
     devoured: 1
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// Export routes for server.js to use.
module.exports = router;
