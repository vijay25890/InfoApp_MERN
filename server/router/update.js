
const router = require("express").Router();
const User = require("../models/User");


/*
Route           /
Description     update user
Access          PUBLIC
Parameters      NONE
Method          post
*/
router.post("/", async (req, res) => {
  const filter = { _id: req.body._id };

  const update = {
    name: req.body.name,
    age: req.body.age,
    city: req.body.city,
    country: req.body.country,
  };

  let doc = await User.findOneAndUpdate(filter, update);
  res.status(200).send(req.body);
});

module.exports = router;
