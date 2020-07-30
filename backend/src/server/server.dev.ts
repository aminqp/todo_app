import * as express   from 'express';
import { connection } from '../database';
import taskRoutes     from '../api/tasks/routes';
import * as bodyParser     from 'body-parser';

const router = express.Router();
const app = express();
const { PORT } = process.env;
app.use( bodyParser.urlencoded( { extended : false } ) );
app.use(bodyParser.json())

connection()
    .then( () =>
           {
             app.use( '/api/v1' , taskRoutes( router ) );
             app.listen( PORT , () =>
             {
               console.log( 'server started at http://localhost:' + PORT || 3000 );
             } );
           } )
    .catch( e =>
            {
              throw new Error( e );
            } );
