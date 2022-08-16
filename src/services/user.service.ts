import { injectable } from "tsyringe";
import { Repository } from "../repository";
import { User } from "../models/User";
import { Op } from "sequelize";
import { sequelize } from "../../sequelize";

@injectable()
export class UserService extends Repository<User> {
  // private repository
  constructor(
    
  ) {
    super(User);
  }
  public saveUser = async (userData: User): Promise<User> => {
    let check = await this.checkDuplicate(userData);
    if (check) {
      return null;
    } else {
      let newUser: any = await this.create(userData);
      return newUser;
    }
  };

  public findAllUsers = async () => {
    return await this.findAll({
      where: {
          [Op.not]: null
      }
    });
  };

  private checkDuplicate = async (data) => {
    let check = await sequelize.query(
      `SELECT * FROM Users WHERE username=:email OR address=:address`,
      {
        replacements: { username: data.username, address: data.wallet_address },
      }
    );
    return check[0].length == 0 ? null : check;
  };

  public blacklistUser = async (address: string) => {
    let check = await sequelize.query(
      `UPDATE users SET is_blacklisted=1 WHERE wallet_address=:address`,
      {
        replacements: { address },
      }
    );
    return check[0].length == 0 ? null : check;
  }

  public loginUser = async (address: string) => {
    let user = await this.findOne({
      wallet_address: address
    });

    return user;
  }

  public fetchBlacklistedUsers = async () => {
    return await this.findAll({
      where: {
        is_blacklisted: 1
      }
    });
  }

  
}