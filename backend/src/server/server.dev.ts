import * as express from 'express';
import  { Request, Response } from 'express';
import DB from '../database'

const app = express();
const { PORT } = process.env;

DB.connectLocal()
    .then(()=>{
      app.get('/', (req: Request, res: Response) => {
        res.send({
                   message: 'hello world',
                 });
      });
      
      app.listen(PORT, () => {
        console.log('server started at http://localhost:'+PORT || 3000);
      });
    })
    .catch(e=> {
      throw new Error(e)
    })
