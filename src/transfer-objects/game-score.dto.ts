import { IsInt, IsNotEmpty} from 'class-validator';
export class GameScoreDto {
    @IsNotEmpty()
    game_key: string;

    @IsNotEmpty()
    game_type: string;

    @IsNotEmpty()
    @IsInt()
    score: number;
    
    @IsNotEmpty()
    @IsInt()
    user_id: number;
}