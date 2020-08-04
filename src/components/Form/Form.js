import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import StepperBar from 'components/StepperBar';
import { useDeviceScreenContext } from 'context';

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledPaper = styled(Paper)`
  margin: 16px 0;
  min-height: 85vh;
  width: 100vw;
  padding: 45px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    width: 595px;
    min-height: 75vh;
  }
`;

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

const StyledFieldsWrapper = styled.div`
  width: 85%;
  margin-bottom: auto;
`;

const StyledButton = styled(Button)`
  width: 50%;

  @media (min-width: 768px) {
    width: auto;
  }
`;

const Form = ({ children, activeStep, handleSubmit, onSubmit, previousStep }) => {
  const history = useHistory();
  const { isTablet } = useDeviceScreenContext();

  return (
    <StyledContainer maxWidth="lg">
      <StepperBar activeStep={activeStep} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledPaper elevation={3}>
          <StyledFieldsWrapper>{children}</StyledFieldsWrapper>
          <StyledButtonWrapper>
            {activeStep > 0 && (
              <StyledButton
                variant={isTablet ? 'outlined' : 'text'}
                onClick={() => history.push(previousStep)}
              >
                <KeyboardArrowLeft />
                Cofnij
              </StyledButton>
            )}
            <StyledButton
              type="submit"
              variant={isTablet ? 'contained' : 'text'}
              color={isTablet ? 'primary' : 'default'}
            >
              Dalej
              <KeyboardArrowRight />
            </StyledButton>
          </StyledButtonWrapper>
        </StyledPaper>
      </form>
    </StyledContainer>
  );
};

Form.propTypes = {
  children: PropTypes.element.isRequired,
  activeStep: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  previousStep: PropTypes.string.isRequired,
};

export default Form;
