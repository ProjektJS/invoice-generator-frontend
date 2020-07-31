import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '90vh',
  },

  innerFormContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },

  stepperContainer: {
    padding: '0',
    display: 'flex',
    flexWrap: 'wrap',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    color: 'white',
  },
  innerTitle: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(5),
  },
  img: {
    height: '60%',
    maxWidth: '100%',
  },
  paper: {
    padding: theme.spacing(2),
    width: '80%',
    minHeight: '90vh',
  },
  circularProgress: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  iframe: {
    width: '75%',
    height: '80vh',
  },
}));
