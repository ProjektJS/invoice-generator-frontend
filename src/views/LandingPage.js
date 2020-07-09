import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import invoiceImg from 'assets/invoiceImg.svg';
import UserPageTemplate from 'Templates/UserPageTemplate';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '90vh',
  },
  img: {
    width: '200px',
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <UserPageTemplate>
      <div className={classes.container}>
        <Typography variant="h3" color="initial" align="center">
          Witamy w generatorze faktur!
          <span role="img" aria-label="welcome">
            ✋🏻
          </span>
        </Typography>
        <img src={invoiceImg} alt="invoice" className={classes.img} />
      </div>
    </UserPageTemplate>
  );
};

export default LandingPage;
