import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  container: {
    '&.doing': {
      '&::before': { backgroundColor: theme.palette.blue.main }
    },
    '&.done': {
      '&::before': { backgroundColor: theme.palette.green.main }
    },
    '&.todo': {
      '&::before': {
        backgroundColor: theme.palette.gold.main
      }
    },
    '&::before': {
      content: '""',
      height: '100%',
      left: 0,
      position: 'absolute',
      top: 0,
      width: '20px'
    },
    borderRadius: '15px',
    boxShadow: '0px 1px 3px 0px #7b7b7b78',
    margin: '10px 0',
    minHeight: '40px',
    overflow: 'hidden',
    padding: '20px 0 20px 30px',
    position: 'relative'
  },
  content: {
    cursor: 'pointer'
  },
  date: {
    color: theme.palette.gray.light,
    fontSize: '12px',
    fontWeight: '300',
    marginTop: '5px'
  },
  title: {
    textTransform: 'capitalize'
  }

}),
{
  name: 'task-card-'
});
