import { useTheme } from '@material-ui/core/styles';

const Container = () => {
  const theme = useTheme();

  return ({
    margin: '0 auto',
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '90%'
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: '700px'
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: '940px'
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      width: '1140px'
    }
  });
};

export default Container;
