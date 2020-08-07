import React, { Suspense } from 'templates/node_modules/react';
import PropTypes from 'templates/node_modules/prop-types';
import styled from 'templates/node_modules/styled-components';
import CircularProgress from 'templates/node_modules/@material-ui/core/CircularProgress';
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
