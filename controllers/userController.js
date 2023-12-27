const express = require("express");
const {postRegisterUserM, postLoginUserM} = require("../models/userModel");
const router = express.Router();

const postRegisterUser = (request, response) => {
    const params = {
        "id": request.query.id,
        "login": request.query.login,
        "password": request.query.password,
        "FName": request.query.FName,
        "Name" : request.query.Name,
        "LName" : request.query.LName,
        "city" : request.query.city,
        "role" : request.query.role,
    }

    if(postRegisterUserM(params))
        return response.status(200).json("Вы успешно зарегистрировались");
    else
        return response.status(401).json("Ошибка авторизации");
}

const postLoginUser =  (request, response) => {
    const params = {
        "id": request.query.id,
        "login": request.query.login,
        "password": request.query.password
    }

    if(postLoginUserM(params))
        return response.status(200).json("Вы успешно авторизовались");
    else
        return response.status(401).json("Неверный логин или пароль");
}

module.exports = {postRegisterUser, postLoginUser};