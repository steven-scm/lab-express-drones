// Iteration #1

// const { model, Schema } = require("mongoose")

const mongoose = require("mongoose");

const droneSchema = new mongoose.Schema({
    name: String,
    propellers: Number,
    maxSpeed: String
});

const droneModel = mongoose.model("drones", droneSchema);

module.exports = droneModel;
