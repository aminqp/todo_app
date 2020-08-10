import { makeStyles } from '@material-ui/core';
import green from '@material-ui/core/colors/green';

export default makeStyles((theme) => ({
  addBtn: {
    height: '40px',
    top: '-20px',
    width: '40px'
  },
  container: {
    position: 'relative'
  },
  loader: {
    color: green[500],
    left: -3,
    position: 'absolute',
    top: -23,
    zIndex: 1
  }
}),
{
  name: 'create-task-'
});
