/** @format */

import { injectable } from 'tsyringe';
import { Controller } from '.';
import { UserService } from '../services/user.service';

@injectable()
class UserController extends Controller {
  // private userRepository
  constructor(
    private userService: UserService
  ) {
    super()
  }

  getUsers = async (req, res) => {
    try {
      let response = await this.userService.findAllUsers()
      return this.response(res, 200, false, response, '')
    } catch (error) {
      return this.response(res, 500, true)
    }
  }

  createUser = async (req, res) => {
    try {
      let response = await this.userService.saveUser(req.body)
      return response
        ? 
          this.response(res, 201, false, response, '')
        : this.response(res, 400, true, false, 'User already exists')
    } catch (err) {
      console.log(err)
      return this.response(res, 500, true)
    }
  }

  login = async (req, res) => {
    try {
      let response = await this.userService.loginUser(req.body.address);
      if (response) {
        
        return this.response(res, 200, false, response, 'Login successful')
      } else {
        return this.response(res, 401, true, false, 'User does not exist')
      }
    } catch (err) {
        return this.response(res, 500, true)
    }
  }

  blacklistUser = async (req, res) => {
    try {
      let {address} = req.body
      return await this.userService.blacklistUser(address);
      
    } catch (err) {
      return this.response(res, 500, true)
    }
  }

  getBlacklistedUsers = async (req, res) => {
    try {
      return await this.userService.fetchBlacklistedUsers();
    } catch (err) {
      return this.response(res, 500, true)
    }
  }
}

export default UserController
