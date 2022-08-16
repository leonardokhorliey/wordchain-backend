import {Model, Column, Table, Unique, Default, CreatedAt, UpdatedAt} from "sequelize-typescript";

@Table
export class User extends Model<User> {
  [x: string]: any;

  @Unique
  @Column
  username: string;
  
  @Column
  wallet_address: string;

  @Default(0)
  @Column
  is_blacklisted: string;

  @CreatedAt
  @Column
  created_at: Date;

  @UpdatedAt
  @Column
  updated_at: Date;

}
