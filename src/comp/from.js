import React, { useState, useEffect } from 'react';
import DynamicForm from './Dynamicform';

function GeneratedFormPage() {
    const [inputArray, setInputArray] = useState([]);

    useEffect(() => {
        const data = JSON.parse(sessionStorage.getItem('data'));
        console.log(data);
        setInputArray(data || []);
    }, []);

    return (
        <div>
            <h1>Generated Form Page</h1>
            <DynamicForm inputArray={inputArray} />
        </div>
    );
}

export default GeneratedFormPage;
