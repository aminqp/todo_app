import * as mongoose from 'mongoose';

const {
        NODE_ENV ,
        DATABASE_HOST ,
        DATABASE_PORT ,
        DATABASE_NAME
      } = process.env;

export const connection = async () =>
{
  if ( NODE_ENV === 'development' )
  {
    mongoose.set( 'debug' , true );
  }
  
  mongoose.connection.on( 'connected' ,
                          ( connected ) =>
                          {
                            console.log( 'Database => connected -> ' , connected );
                          } );
  mongoose.connection.on( 'error' , ( error ) =>
  {
    throw new Error( `Database => connection error -> ${ error }` );
  } );
  mongoose.connection.on( 'disconnected' ,
                          ( disconnected ) =>
                          {
                            throw new Error( `Database => disconnected -> ${ disconnected }` );
                          } );
  
  
  return await mongoose.connect(
      `mongodb://${ DATABASE_HOST }:${ DATABASE_PORT }/${ DATABASE_NAME }` ,
      {
        socketTimeoutMS    : 0 ,
        keepAlive          : true ,
        useUnifiedTopology : true ,
        useNewUrlParser    : true
      } );
};
