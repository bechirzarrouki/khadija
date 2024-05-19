import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button } from '@mui/material';
import Balance1 from './Balance1';
import Balance2 from './Balance2';
import Balancef from './Balancef';
import './BalanceV.css';

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
      <div>
        {activeStep === 0 && <Balance1 />}
        {activeStep === 1 && <Balance2 />}
        {activeStep === 2 && <Balancef />}
      </div>
      <div>
        <Button className='Balancebtn' 
         disabled={activeStep === 0} onClick={handleBack}>
          Back
        </Button>
        <Button className='Balancebtn' variant="contained" onClick={handleNext}>
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'} Next
        </Button>
      </div>
    </div>
  );
};

export default MyStepper;
