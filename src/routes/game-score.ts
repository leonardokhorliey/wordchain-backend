import express, { Router } from "express";

import {container} from "tsyringe";
import ScoreController from "../controller/game-score.controller"
import { GameScoreDto } from "../transfer-objects/game-score.dto";
import { validation } from "../middleware/validation";
const scoreController: any = container.resolve(ScoreController)

const GameScoreRouter : Router = express.Router();

GameScoreRouter.post('/create', validation(GameScoreDto), scoreController.createScore);
GameScoreRouter.put('/:id/save', validation(GameScoreDto), scoreController.updatePendingScore);
GameScoreRouter.get('/?user_id=:user_id', validation(GameScoreDto), scoreController.fetchPendingScore);

export default GameScoreRouter;