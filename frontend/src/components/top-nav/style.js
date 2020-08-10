import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  container: {
    '& > div': {
      margin: theme.spacing(2)
    },
    '&.doing': {
      '&::before': { backgroundColor: theme.palette.blue.main }
    },
    '&.done': {
      '&::before': { backgroundColor: theme.palette.green.main }
    },
    '&.todo': {
      '&::before': { backgroundColor: theme.palette.gold.main }
    },
    '&::before': {
      content: '""',
      height: '100%',
      left: 0,
      position: 'absolute',
      top: 0,
      width: '35px'
    },
    padding: '30px',
    position: 'relative'
  },
  date: {
    borderTop: `1px solid ${theme.palette.gray.light}`,
    fontSize: '12px'
  },
  description: {
    fontSize: '14px'
  },
  name: {
    fontSize: '16px',
    fontWeight: '500',
    textTransform: 'capitalize'
  }

}),
{
  name: 'show-task-'
});
