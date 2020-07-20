import React from 'react';
import Typography from '@material-ui/core/Typography';
import UserPageTemplate from 'templates/UserPageTemplate';
import { useStyles } from 'theme/styles';
import error404 from 'assets/error404.svg';

const ErrorNotFoundPage = () => {
  const classes = useStyles();

  return (
    <UserPageTemplate>
      <div className={classes.pageContainer}>
        <Typography variant="h3" color="initial" align="center">
          Oops! Nie ma takiej strony.
        </Typography>
        <img src={error404} alt="errortype" className={classes.img} />
      </div>
    </UserPageTemplate>
  );
};

export default ErrorNotFoundPage;
