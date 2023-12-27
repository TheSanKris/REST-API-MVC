const express = require("express");
const {getProduct, getProducts, postProducts, deleteProduct} = require("../controllers/indexController")
const {postRegisterUser, postLoginUser} = require("../controllers/userController");
const router = express.Router();

//Просмотр продуктов
router.get("/products", getProducts);

router.get("/products/:id", getProduct);

//Управление продуктами
router.post("/products", postProducts);

router.delete("/products/:id", deleteProduct);

//Управление пользователями
router.post("/users/register", postRegisterUser);

router.post("/users/login", postLoginUser);

module.exports = router;