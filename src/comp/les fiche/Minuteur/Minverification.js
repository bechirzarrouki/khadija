import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button } from '@mui/material';
import './Minverification.css';
import Min1 from './Min1';
import Min2 from './Min2';
import Minf from './Minf';
const steps = ['Step 1', 'Step 2', 'Step 3'];

const Minverification = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

    return(
        <div>
<div>
        {activeStep === 0 && <Min1 />}
        {activeStep === 1 && <Min2 />}
        {activeStep === 2 && <Minf />}
      </div>
      <div>
        <Button className='CFbtn' 
         disabled={activeStep === 0} onClick={handleBack}>
          Back
        </Button>
        <Button className='CFbtn' variant="contained" onClick={handleNext}>
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'} Next
        </Button>
      </div>
    </div>

    )
}
export default Minverification;
