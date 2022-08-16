import express, { Router } from "express";

import {container} from "tsyringe";
import TournamentController from "../controller/tournament.controller";
import { TournamentDto } from "../transfer-objects/tournament.dto";
import { validation } from "../middleware/validation";
const tournamentController: any = container.resolve(TournamentController);

const TournamentRouter : Router = express.Router();

TournamentRouter.post('/create', validation(TournamentDto), tournamentController.createTournament);
TournamentRouter.get('/', validation(TournamentDto), tournamentController.getTournaments);

export default TournamentRouter;