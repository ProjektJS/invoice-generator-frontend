import React from 'react';
import Typography from '@material-ui/core/Typography';
import invoiceImg from 'assets/invoiceImg.svg';
import UserPageTemplate from 'templates/UserPageTemplate';
import { useStyles } from 'theme/styles';

const LandingPage = () => {
  const classes = useStyles();

  return (
    <UserPageTemplate>
      <div className={classes.pageContainer}>
        <Typography variant="h3" color="initial" align="center">
          Witamy w generatorze faktur!
        </Typography>
        <img src={invoiceImg} alt="invoice" className={classes.img} />
      </div>
    </UserPageTemplate>
  );
};

export default LandingPage;
