import React,{useRef} from 'react';
import {useReactToPrint} from 'react-to-print';
import './Imprimer2.css';
import Navmetro from './Navmetro';
function Imprimer2(){
    const componentRef = useRef();
    const handelPrint = useReactToPrint({
content:() => componentRef.current,
documentTitle:'emp-data',
onAfterPrint:()=> alert('print success')
    });
    return(
        <div className='p2'>
         <Navmetro/>
       
          <div className='imprimer2'>
          <h1>Fiche a imprimer </h1>
         <div className='print2'ref={componentRef }  >
         <p>fiche a imprimer </p>
         <button  className="printbnt2" onClick={handelPrint}>print</button>
        </div>
        </div>
        </div>
    )
}
export default Imprimer2;