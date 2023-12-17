var express = require('express');
var router = express.Router();
const UserModel = require('./users');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const users = await UserModel.find(); 
  res.render("index", { users }); 



});
router.get('/delete/:_id', async function(req, res, next) {
  const deletedUser = await UserModel.findOneAndDelete({ _id: req.params._id });
  res.redirect("/")



});
router.post('/generate', async function(req, res, next) {
  const newUser = await UserModel.create({
    username: req.body.name,
    email: req.body.email,
    age: req.body.age,
});

console.log(newUser);
res.redirect("/"); 

});         

module.exports = router;
