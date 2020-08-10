import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  active: {
    borderBottom: `2px solid ${theme.palette.green.main} !important`
  },
  container: {
    backgroundColor: theme.palette.gray.main,
    color: theme.palette.white.main,
    height: '50px',
    left: 0,
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 100
  },
  link: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderBottom: '2px solid transparent',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    transition: 'border .3s linear'
  }
}),
{
  name: 'top-nav-'
});
