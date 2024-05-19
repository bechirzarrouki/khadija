import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button } from '@mui/material';
import MetU1 from "./MetU1";
import MetU2 from "./MetU2";
import MetUf from "./MetUf";

    const steps = ['Step 1', 'Step 2', 'Step 3'];

    const MRverification = () => {
      const [activeStep, setActiveStep] = useState(0);
    
      const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };
    return(
<div className="verifmr">
    
<div>
        {activeStep === 0 && <MetU1 />}
        {activeStep === 1 && <MetU2 />}
        {activeStep === 2 && <MetUf />}
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

export default MRverification;