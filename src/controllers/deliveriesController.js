// const mongoose = require("mongoose");
const Delivery = require('../models/deliveryModel').Delivery;


exports.getAll = async (req, res, next) => {
    try {
    //   let data = await repository.getById(req.params.id);

    let clients = await Delivery.find();
    
      res.status(201).send(clients);
    } catch (err) {
      res.status(400).send({ message: "Cannot find any Client!", err });
    }
};

exports.registerClient = async (req, res, next) => {
  try {
    
  let client =  await Delivery.create(req.body);

    res.status(201).send(client);
  } catch (err) {
    res.status(400).send({ message: "Cannot find any Client!", err });
  }
};

exports.deleteAll = async (req, res, next) => {
  try {
    
  let client =  await Delivery.deleteMany();

    res.status(201).send(client);
  } catch (err) {
    res.status(400).send({ message: "Cannot find any Client!", err });
  }
};


