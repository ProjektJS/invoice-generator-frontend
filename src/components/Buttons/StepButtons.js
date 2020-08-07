import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { useDeviceScreenContext } from 'context';

const StyledButtonWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  background-color: white;

  @media (min-width: 768px) {
    position: static;
    width: 85%;
    display: flex;
    justify-content: flex-end;
  }
`;

const StyledButton = styled(Button)`
  width: 50%;

  @media (min-width: 768px) {
    width: auto;
  }
`;

const StepButtons = ({ activeStep, previousStepRoute, handleInvoiceGenerateFn, done }) => {
  const history = useHistory();
  const { isTablet } = useDeviceScreenContext();

  return (
    <StyledButtonWrapper>
      {activeStep > 0 && (
        <StyledButton
          variant={isTablet ? 'outlined' : 'text'}
          onClick={() => history.push(previousStepRoute)}
        >
          <KeyboardArrowLeft />
          Cofnij
        </StyledButton>
      )}

      {handleInvoiceGenerateFn ? (
        <StyledButton
          type="button"
          onClick={handleInvoiceGenerateFn}
          variant={isTablet ? 'contained' : 'text'}
          color={isTablet ? 'primary' : 'default'}
        >
          {done ? 'Generuj ponownie' : 'Generuj'}
        </StyledButton>
      ) : (
        <StyledButton
          type="submit"
          variant={isTablet ? 'contained' : 'text'}
          color={isTablet ? 'primary' : 'default'}
        >
          Dalej
          <KeyboardArrowRight />
        </StyledButton>
      )}
    </StyledButtonWrapper>
  );
};

StepButtons.propTypes = {
  activeStep: PropTypes.number.isRequired,
  previousStepRoute: PropTypes.string.isRequired,
  handleInvoiceGenerateFn: PropTypes.func.isRequired,
  done: PropTypes.bool,
};

StepButtons.defaultProps = {
  done: false,
};

export default StepButtons;
