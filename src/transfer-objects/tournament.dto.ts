import { IsInt, IsNotEmpty} from 'class-validator';
export class TournamentDto {
    @IsNotEmpty()
    tournament_key: string;

    @IsNotEmpty()
    tournament_onchain_id: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    description: string;
    
    @IsNotEmpty()
    @IsInt()
    minimum_stake: number;
}