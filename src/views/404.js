import React from 'react';
import Typography from '@material-ui/core/Typography';
import UserPageTemplate from 'templates/UserPageTemplate';
import { useStyles } from 'theme/styles';

const ErrorNotFoundPage = () => {
  const classes = useStyles();

  return (
    <UserPageTemplate>
      <div className={classes.pageContainer}>
        <Typography variant="h3" color="initial" align="center">
          Oops! Nie ma takiej strony.
          <span role="img" aria-label="welcome">
            🥺
          </span>
        </Typography>
      </div>
    </UserPageTemplate>
  );
};

export default ErrorNotFoundPage;
