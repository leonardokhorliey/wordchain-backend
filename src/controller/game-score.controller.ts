import { injectable } from "tsyringe";
import { Controller } from ".";
import { GameScoreService } from "../services/game-score.service";

@injectable()
class GameScoreController extends Controller {
    constructor(
        private scoreService: GameScoreService
      ) {
        super();
      }
   
    createScore = async(req, res)=>{
        let response = await this.scoreService.setScore(req.body);
        return this.response(res, 201, false, response, "Created successfully");

    }
    

    fetchPendingScore = async(req, res)=>{
        try{
            let userId = req.query.user_id;
            let response = await this.scoreService.fetchUserPendingScore(userId);
            return this.response(res, 200, false, response, "Successful");

        }catch(err){
            console.log(err)
            this.response(res, 500, true, false, err.message);
        }
    
    }

    updatePendingScore = async(req, res) => {
        try{
            let gameScoreId = req.params.id;
            let response = await this.scoreService.updateSendScore(gameScoreId);
            return this.response(res, 200, false, response, "Successful");

        }catch(err){
            console.log(err)
            this.response(res, 500, true, false, err.message);
        }
    }

}

export default GameScoreController;