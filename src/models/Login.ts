import {Model, Column, Table, ForeignKey, CreatedAt, UpdatedAt, Default, HasMany, HasOne} from "sequelize-typescript";
import { User } from "./User";

@Table
export class Login extends Model<Login>{

    @Column
    deviceType: string;

    @Column
    operatingSystem: string;

    @Column
    source: string;

    @Column
    ip_address: string;
    
    @ForeignKey(()=> User)
    @Column
    user_id: number;

    @Default(0)
    @Column
    is_successful: number;

    @CreatedAt
    @Column
    created_at: Date;

    @UpdatedAt
    @Column
    updated_at: Date;
}