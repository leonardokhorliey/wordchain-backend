import { injectable } from "tsyringe";
import { Controller } from ".";
import { TournamentService } from "../services/tournament.service";

@injectable()
class TournamentController extends Controller {
    constructor(
        private tournamentService: TournamentService
      ) {
        super();
      }
   
    createTournament = async(req, res)=>{
        let response = await this.tournamentService.addTournament(req.body);
        return this.response(res, 201, false, response, "Created successfully");

    }
    

    getTournaments = async(req, res)=>{
        try{
            let response = await this.tournamentService.getAllTournaments();
            return this.response(res, 200, false, response, "Successful");

        }catch(err){
            console.log(err)
            this.response(res, 500, true, false, err.message);
        }
    
    }



}

export default TournamentController;