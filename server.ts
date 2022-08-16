import 'reflect-metadata'
import express, { Application } from 'express'
import { config } from './src/config/config'
import { TournamentRoute, UserRoute, GameScoreRoute } from './src/routes'
import {sequelize} from './sequelize';
import cors from 'cors'


class Server {
  private app: Application
  constructor() {
    this.app = express()
  }

  public configuration() {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.get('/', (req, res) => {
      res.status(200).json('starting...')
    })
    this.app.use('/tournaments', TournamentRoute)
    this.app.use('/users', UserRoute)
    this.app.use('/pending-scores', GameScoreRoute)
  }

  public async start() {
    const PORT: any = config.web.port
    await sequelize.sync();
    this.configuration()
    this.app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}.`)
    })
  }
}
const server = new Server()
server.start()
