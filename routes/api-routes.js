const db = require("../models");

module.exports = function(app){
    app.get("/api/workouts", (req, res) => {
        // get all workouts
    });

    app.get("/api/workouts/:id", (req, res) => {
        // get specific workout
    });

    app.get("/api/workouts/range", (req, res) => {
        // not sure what this is for jus yet but will code it once I figure that out
    });

    app.post("/api/workouts", (req, res) => {
        // create a new workout
    });

    app.put("/api/workouts/:id", (req, res) => {
        // update specific workout
    });
}

