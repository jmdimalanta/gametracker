const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, "The game's title is required!"],
        minlength: [3, "The game's title must be at least 3 characters!"]
    },

    publisher: {
        type: String,
        required: [true, "A publisher is required!"],
        minlength: [3, "The publisher must be at least 3 characters!"]
    },

    rating: {
        type: String,
        required:[true, "A rating is required!"],
        enum: [
            "E",
            "E10",
            "T",
            "M",
            "RP"
        ]
    },

    image:{
        type: String,
        required: [true, "A cover art is required!"]
    },

    yearReleased: {
        type: Number,
        min: [1972, "Stop lying! There are no video games release before 1972!!"]
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

}, {timestamps: true})

const Game = mongoose.model("Game", GameSchema);

module.exports = Game;