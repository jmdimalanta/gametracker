const GameController = require("../controllers/game.controller");
const {authenticate} = require("../config/jwt.config");

module.exports = (app)=>{
    app.get("/api/games", GameController.getAllGames);
    app.post("/api/games", authenticate, GameController.createNewGame);
    app.get("/api/games/:id", GameController.findOneGame);
    app.delete("/api/games/:id", GameController.deleteGame);
    app.put("/api/games/:id", GameController.updateGame);
}