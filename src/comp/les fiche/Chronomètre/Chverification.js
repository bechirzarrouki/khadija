import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button } from '@mui/material';

import Chrno1 from './Chrno1';
import Chrno2 from './Chrno2';
import Chrnof from './Chrnof';

    const steps = ['Step 1', 'Step 2', 'Step 3'];

    const Chverification = () => {
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
        {activeStep === 0 && <Chrno1 />}
        {activeStep === 1 && <Chrno2 />}
        {activeStep === 2 && <Chrnof />}
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
export default Chverification;