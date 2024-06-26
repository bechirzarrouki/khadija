import React, { useState } from 'react';
import './Dropdown.css';
import { Menuresponsable} from './Menuresponsable';
import { Link } from 'react-router-dom';

function Dropdown() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
<div className='drop'>
<ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
{Menuresponsable.map((item, index) => {
return (
<li key={index}>
<Link className={item.cName} to={item.path} onClick={() => setClick(false)}>{item.title}</Link>
</li>
);
})}
</ul>
</div>   
  );
}

export default Dropdown;
