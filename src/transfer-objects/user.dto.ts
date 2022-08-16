import { IsInt, IsNotEmpty} from 'class-validator';
export class UserDto {
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    wallet_address: string;
}