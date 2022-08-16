import {Model, Column, Table, ForeignKey, CreatedAt, UpdatedAt, Default} from "sequelize-typescript";
import { User } from "./User";

@Table
export class GameScore extends Model<GameScore>{

    @Column
    game_key: string;

    @Column
    game_type: string;

    @Column
    score: number;
    
    @ForeignKey(()=> User)
    @Column
    user_id: number;

    @Default(0)
    @Column
    status: number;

    @CreatedAt
    @Column
    created_at: Date;

    @UpdatedAt
    @Column
    updated_at: Date;
}