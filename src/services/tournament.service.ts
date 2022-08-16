import { Repository } from "../repository";
import { Tournament } from "../models/Tournament";
import { Op } from "sequelize";

export class TournamentService extends Repository<Tournament>{
    constructor() {
        super(Tournament)
    }

    public addTournament = async (data) => {
        return await this.create(data);
    }

    public getAllTournaments = async () => {
        return await this.findAll({
            where: {
                [Op.not]: null
            }
        });
    }

}