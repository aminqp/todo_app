import * as express from 'express';
import { connection } from '../database'
import taskRoutes     from '../api/tasks/routes'
const app = express();
const { PORT } = process.env;


connection().then(()=>{
      taskRoutes(app);
      app.listen(PORT, () => {
        console.log('server started at http://localhost:'+PORT || 3000);
      });
    })
    .catch(e=> {
      throw new Error(e)
    })
