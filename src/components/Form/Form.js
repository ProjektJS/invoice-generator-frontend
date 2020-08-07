import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StepButtons } from 'components/Buttons';

const StyledForm = styled.form`
  min-height: 85vh;
  width: 100vw;
  padding: 45px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    width: 80vw;
  }

  @media (min-width: 1280px) {
    width: 55vw;
  }

  @media (min-width: 1440px) {
    min-height: 70vh;
    width: 45vw;
  }

  @media (min-width: 1920px) {
    min-height: 79vh;
    width: 35vw;
  }
`;

const StyledFieldsWrapper = styled.div`
  width: 85%;
  margin-bottom: auto;
`;

const Form = ({ children, activeStep, handleSubmit, onSubmit, previousStepRoute }) => {
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledFieldsWrapper>{children}</StyledFieldsWrapper>
      <StepButtons activeStep={activeStep} previousStepRoute={previousStepRoute} />
    </StyledForm>
  );
};

Form.propTypes = {
  children: PropTypes.element.isRequired,
  activeStep: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  previousStepRoute: PropTypes.string.isRequired,
};

export default Form;
