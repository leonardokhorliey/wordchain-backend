import {Model, Column, Table, ForeignKey, CreatedAt, UpdatedAt, Default} from "sequelize-typescript";
import { User } from "./User";

@Table
export class Tournament extends Model<Tournament>{

    @Column
    tournament_key: string;

    @Column
    tournament_onchain_id: string;

    @Column
    name: string;

    @Column
    description: string;
    
    @Column
    minimum_stake: number;

    @ForeignKey(()=> User)
    @Column
    owner: number;

    @CreatedAt
    @Column
    created_at: Date;

    @UpdatedAt
    @Column
    deadline: Date;

    @Default(0)
    @Column
    visibility: number;

    @Default(0)
    @Column
    is_admin_owned: number;
}

