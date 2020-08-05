const express = require('express');
import { connection } from '../database';
import taskRoutes     from '../api/tasks/routes';
const bodyParser   = require('body-parser');
const cors = require('cors')

const router = express.Router();
const app = express();
const { PORT } = process.env;

/* TODO-qp::
*   1) add Auth middleware
*  */

// app.options('*', (req, res) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:2020');
//   res.setHeader('Access-Control-Allow-Credentials', 'true');
//   res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Authorization,X-LIST-OPTIONS,Content-Type,Accept-Language,Accept,x-trigger,Cache-Control');
//   res.setHeader('Access-Control-Expose-Headers', 'X-LIST-OPTIONS');
//   res.status(200);
//   res.end()
// });

app.options('*', cors({
                        origin: true,
                        credentials:true,
                        allowedHeaders: ['Authorization,X-LIST-OPTIONS,Content-Type,Accept-Language,Accept,x-trigger,Cache-Control'],
                        exposedHeaders: ['Authorization,X-LIST-OPTIONS,Content-Type,Accept-Language,Accept,x-trigger,Cache-Control'],
                        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
                        "preflightContinue": false,
                        "optionsSuccessStatus": 204
                      }))
app.use(cors({
               origin: true,
               credentials:true,
               allowedHeaders: ['Authorization,X-LIST-OPTIONS,Content-Type,Accept-Language,Accept,x-trigger,Cache-Control'],
               exposedHeaders: ['Authorization,X-LIST-OPTIONS,Content-Type,Accept-Language,Accept,x-trigger,Cache-Control'],
               "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
               "preflightContinue": false,
               "optionsSuccessStatus": 204
             }));
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
