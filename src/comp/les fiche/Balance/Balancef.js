import React from "react";
import './BalanceV.css';
/*import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button } from '@mui/material';
import Balance1 from './Balance1';
import Balance2 from './Balance2';
import Balancef from './Balancef';

const steps = ['Step 1', 'Step 2', 'Step 3'];

const MyStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === 0 && <Balance1 />}
        {activeStep === 1 && <Balance2 />}
        {activeStep === 2 && <Balancef />}
      </div>
      <div>
        <Button disabled={activeStep === 0} onClick={handleBack}>
          Back
        </Button>
        <Button variant="contained" onClick={handleNext}>
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </div>
    </div>
  );
};

export default MyStepper;
*/ 
function Balancef(props) {
  return (
    <div >
      <p>
        <b>Name:</b> {"ff"}
      </p>
      <p>
        <b>Surname:</b> {"zarrouki"}
      </p>
      <p>
        <b>Email:</b> {"bechir.zarrouki00@gmail.com"}
      </p>
      <p>
        <b>Phone:</b> {"25405423"}
      </p>
    </div>
  );
}

export default Balancef;
