import {Model, Column, Table, ForeignKey, CreatedAt, UpdatedAt, Default} from "sequelize-typescript";
import { User } from "./User";
import { Tournament } from "./Tournament";

@Table
export class TournamentJoins extends Model<TournamentJoins>{
    
    @ForeignKey(()=> User)
    @Column
    user_id: number;

    @ForeignKey(()=> Tournament)
    @Column
    tournament_id: number;

    @CreatedAt
    @Column
    created_at: Date;
}
