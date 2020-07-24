import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '90vh',
  },
  formContainer: {
    padding: theme.spacing(2),
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  innerFormContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  fields: {
    width: '450px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  ulContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  liContainer: {
    width: '350px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  buttonContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  stepperContainer: {
    padding: '0',
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2),
    width: '95%',
  },
  button: {
    marginTop: theme.spacing(2),
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
    marginBottom: theme.spacing(4),
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
