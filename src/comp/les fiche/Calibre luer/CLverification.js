import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button } from '@mui/material';
import Calibrel1 from "./Calibrel1";
import Calibrel2 from "./Calibrel2";
import Calibrelf from "./Calibrelf";

    const steps = ['Step 1', 'Step 2', 'Step 3'];

    const CAFverification = () => {
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
        {activeStep === 0 && <Calibrel1 />}
        {activeStep === 1 && <Calibrel2 />}
        {activeStep === 2 && <Calibrelf />}
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
export default CAFverification;