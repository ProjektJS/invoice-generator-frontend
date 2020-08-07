import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';
import { UserPageTemplate } from 'templates';

const StyledCircularProgress = styled(CircularProgress)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CreateInvoicePageTemplate = ({ children }) => {
  return (
    <UserPageTemplate>
      <Suspense fallback={<StyledCircularProgress />}>{children}</Suspense>
    </UserPageTemplate>
  );
};

CreateInvoicePageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CreateInvoicePageTemplate;
