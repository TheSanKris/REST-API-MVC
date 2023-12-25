const express = require("express");
const {getProductM, getProductsM, deleteProductM} = require("../models/indexModel");
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
    const products = getProductsM();

    if(!products || products.length == 0)
        return response.status(401).json("Продуктов нет");
    else
        return response.status(200).json(products);
}

const deleteProduct = (request, response) => {
    const products = deleteProductM(request.params.id);

    if(!products || products.length == 0)
        return response.status(401).json("Продуктов нет");
    else
        return response.status(200).json(products);
}

module.exports = {getProduct, getProducts, postProducts, deleteProduct};