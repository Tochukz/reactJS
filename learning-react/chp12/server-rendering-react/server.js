//import express from 'express';
const express = require('express');

const logger = (req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
}

const sayHello = (req, res) => res.status(200).send("<h1>Hello World");

const app = express().use(logger).use(sayHello);

app.listen(3000, () => console.log('Recie app running at http://localhost:3000'));