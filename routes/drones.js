const express = require('express');
const router = express.Router();

// require the Drone model here
const dronesModel = require("./../models/Drone.model");

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  //dronesModel.find({propellers: 4})
  dronesModel.find()
    .then((drones) => {
      res.render('drones/list.hbs', { drones })
    })
    .catch(e => console.error(e))
});

// GET /hackers = fetch the hackers and pass them to a view
// router.get("/", async (req, res, next) => {
//   try {
//     res.render("hackers/list.hbs", {
//       hackers: await hackerModel.find(),
//     });
//   } catch (err) {
//     next(err);
//   }
// });


router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form.hbs');
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  dronesModel.create(req.body)
    .then(res.redirect("/drones"))
    .catch(e => console.error(e))
});


// POST /hackers = uses the form inputs to insert a doc in database
// router.post("/", async (req, res, next) => {
//   try {
//     await hackerModel.create(req.body);
//     res.redirect("/hackers");
//   } catch (err) {
//     next(err);
//   }
// });



router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
