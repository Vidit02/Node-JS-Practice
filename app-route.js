var router = require("express").Router()

const sessionController = require("./controller/session-controller")
const userController = require("./controller/user.controller")
const roleController = require("./controller/role-controller")

router.post("/signup",sessionController.signup)
router.get("/users",userController.getAllUsers)
router.get("/users/:userId",userController.getUserById)
router.post("/users",userController.getUserByEmail)
router.delete("/usersdel/:userId",userController.deleteUser)
router.put("/users/:userId",userController.updateUser)

router.post("/role",roleController.saveRole)
router.get("/role/:roleId",roleController.getRoleById)
router.get("/roles",roleController.getAllRoles)

module.exports = router