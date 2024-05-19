import React,{useRef} from 'react';
import {useReactToPrint} from 'react-to-print';
import './Imprimer.css'
import Navmqual from './Navqual';
function Imprimer(){
    const componentRef = useRef();
    const handelPrint = useReactToPrint({
content:() => componentRef.current,
documentTitle:'emp-data',
onAfterPrint:()=> alert('print success')
    });
    return(
        <div className='p'>
    <Navmqual/>
    <div className='imprimer'>
    <h1>Fiche a imprimer </h1>
        <div className='print' ref={componentRef }  >
         <p>Contenu a imprimer </p>
         <button  className="printbnt"onClick={handelPrint}>print</button>
        </div>
        </div>
        </div>
    )
}
export default Imprimer;