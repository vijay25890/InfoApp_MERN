
const router = require("express").Router();
const User = require("../models/User");


/*
Route           /
Description     delete user
Access          PUBLIC
Parameters      NONE
Method          post
*/
router.post("/", async (req, res) => {
  const filter = { _id: req.body._id };

  let doc = await User.deleteOne(filter);
  res.status(200).send(req.body);
});

module.exports = router;