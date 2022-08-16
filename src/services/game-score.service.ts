import { Repository } from "../repository";
import { sequelize } from "../../sequelize";
import { GameScore } from "../models/GameScore";
import { Op } from "sequelize";

export class GameScoreService extends Repository<GameScore> {
    constructor() {
        super(GameScore)
    }

    public setScore = async (data) => {
        return await this.create(data);
    }

    public fetchUserPendingScore = async (userId: number) => {
        return await this.findOne({
            where: {
                [Op.and]: {
                    user_id: userId,
                    status: 0
                }
            }
        });
    }

    public updateSendScore = async (gamescoreId: number) => {
        let check = await sequelize.query(
            `UPDATE game_score SET status = 1 WHERE id=:gamescoreId`,
            {
                replacements: { gamescoreId }
            }
        )

        return check[0].length == 0 ? null : check;
    }

    
}