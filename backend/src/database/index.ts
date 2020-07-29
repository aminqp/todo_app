import mongoose = require('mongoose');


const {
        NODE_ENV
      } = process.env

if (NODE_ENV === 'development') {
  mongoose.set('debug', true);
}


class DB {
  private dbHost = process.env.DATABASE_HOST;

  private dbPort = process.env.DATABASE_PORT;

  private dbName = process.env.DATABASE_NAME;

  private connection = <any> null;
  
  public connectLocal = async () => {
    this.connection = await mongoose.connect(
      `mongodb://${this.dbHost}:${this.dbPort}/${this.dbName}`,
      {
        socketTimeoutMS: 0,
        keepAlive: true,
        reconnectTries: 30,
        useUnifiedTopology: true,
        useNewUrlParser: true
      }
    );

    mongoose.connection.on('connected',
      (connected) => {
        console.log('Database => connected -> ', connected);
      });
    mongoose.connection.on('error', (error) => {
      throw new Error(`Database => connection error -> ${error}`)
    });
    mongoose.connection.on('disconnected',
      (disconnected) => {
        throw new Error(`Database => disconnected -> ${disconnected}`)
    });
  };
}

export default new DB();
