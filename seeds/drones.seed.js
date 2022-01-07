// Iteration #1

require("dotenv").config();
require('../db/index');

const DroneModel = require("../models/Drone.model");

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];


(async function createDrones() {
    try {
        const { deletedCount } = await DroneModel.deleteMany(); // reset the collection
        console.log(`success : ${deletedCount} drones deleted from database !`);
        const res = await DroneModel.insertMany(drones);
        console.log(`success : ${res.length} drones in database !`);
        process.exit();
    } catch (err) {
        console.log("ERROR !");
        console.error(err);
    }
})();
