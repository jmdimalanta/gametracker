const Game = require("../models/game.model");

module.exports = {
    
    getAllGames: (req, res)=>{
        Game.find()
            .then((allGames)=>{
                console.log(allGames);
                res.json(allGames);
            })
            .catch((err)=>{
                console.log("Get all games failed");
                res.json({message: "Something went wrong with getAll", error: err})
            })
    },

    createNewGame: (req, res)=>{
        Game.create(req.body)
            .then((newGame)=>{
                console.log(newGame);
                res.json(newGame)
            })
            .catch((err)=>{
                console.log("Something went wrong in createNewGame");
                res.status(400).json(err);
            })
    },

    findOneGame: (req, res)=>{
        Game.findOne({_id: req.params.id})
            .then((oneGame)=>{
                console.log(oneGame);
                res.json(oneGame)
            })
            .catch((err)=>{
                console.log("Find One Game failed!");
                res.json({message: "Something went wrong in findOneGame", error: err})
            })
    },

    deleteGame: (req, res)=>{
        Game.deleteOne({_id: req.params.id})
            .then((deletedGame)=>{
                console.log(deletedGame);
                res.json(deletedGame)
            })
            .catch((err)=>{
                console.log("Delete one game failed");
                res.json({message: "Something went wrong in deleteGame", error: err})
            })
    },

    updateGame: (req, res)=>{
        Game.findOneAndUpdate({_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
            )
            .then((updatedGame)=>{
                console.log(updatedGame);
                res.json(updatedGame)
            })
            .catch((err)=>{
                console.log("Something went wrong in updateGame");
                res.status(400).json(err);
            })
    }
}