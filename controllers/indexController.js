const express = require("express");
const {getProductM, getProductsM, deleteProductM, postProductM} = require("../models/indexModel");
const {postCheckRoleM} = require("../models/userModel");
const router = express.Router();

const getProduct = (request, response) => {
    const product = getProductM(request.params.id);

    if(!product || product.length == 0)
        return response.status(401).json("Такого продукта не существует");
    else
        return response.status(200).json(product);
}

const getProducts = (request, response) => {
    const products = getProductsM();

    if(!products || products.length == 0)
        return response.status(401).json("Продуктов нет");
    else
        return response.status(200).json(products);
}

const postProducts =  (request, response) => {
    const params = {
        "id": request.query.id,
        "name": request.query.name
    }

    const mass = {
        "role": request.query.role
    }
    
    if(postCheckRoleM(mass)) 
    {
        if(postProductM(params))
            return response.status(200).json("Вы успешно добавили продукт");
        else
            return response.status(401).json("Ошибка добавления продукта");
    }
    else
        return response.status(401).json("Ошибка доступа");
}

const deleteProduct = (request, response) => {
    const params = {
        "role": request.query.role
    }
    let products;
    if(postCheckRoleM(params))
        products= deleteProductM(request.params.id);

    if(!products || products.length == 0)
        return response.status(401).json("Продуктов нет");
    else
        return response.status(200).json(products);
}

module.exports = {getProduct, getProducts, postProducts, deleteProduct};