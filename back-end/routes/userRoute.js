const router = require('express').Router()
const user = require('../controller/userController.js')
router.get('/getAllUsers',user.getAllUsers)
router.post('/addUser',user.addUser)
router.delete('/deleteUser/:id',user.deleteUser)
router.put('/updateUser/:id',user.updateUser)
router.get("/getUser/:id", user.getUser);
module.exports = router