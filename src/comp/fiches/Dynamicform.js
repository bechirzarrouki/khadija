import React, { useState, useEffect } from 'react';

function DynamicForm({ inputArray, onFormChange }) {
    const [formData, setFormData] = useState([]);

    useEffect(() => {
        onFormChange(formData);
    }, [formData, onFormChange]);

    const handleInputChange = (event) => {
        const { value, type, checked } = event.target;
        const placeholder = event.target.getAttribute('placeholder');
        const newFormData = {
            placeholder: placeholder,
            value: type === 'checkbox' ? checked : value
        };

        if (type === 'radio' || type === 'checkbox') {
            let updatedFormData;
            if (type === 'radio') {
                updatedFormData = formData.map(item => {
                    if (item.placeholder === placeholder) {
                        return { ...item, value: value };
                    }
                    return item;
                });
            } else {
                updatedFormData = formData.map(item => {
                    if (item.placeholder === placeholder) {
                        return { ...item, value: { ...item.value} };
                    }
                    return item;
                });
            }

            const itemExists = formData.some(item => item.placeholder === placeholder);
            if (!itemExists) {
                updatedFormData.push(newFormData);
            }

            setFormData(updatedFormData);
        } else {
            const updatedFormData = formData.filter(item => item.placeholder !== placeholder);
            setFormData([...updatedFormData, newFormData]);
        }
    };

    return (
        <div>
            <h2>Generated Form</h2>
            <form>
                {inputArray.map((inputProps, index) => {
                    if (inputProps.type === 'text' || inputProps.type === 'email' || inputProps.type === 'number' || inputProps.type === 'date') {
                        return (
                            <div key={index}>
                                <label>{inputProps.placeholder}</label>
                                <input
                                    type={inputProps.type}
                                    name={inputProps.name}
                                    placeholder={inputProps.placeholder}
                                    onChange={handleInputChange}
                                />
                            </div>
                        );
                    } else if (inputProps.type === 'checkbox') {
                        return (
                            <div key={index}>
                                <label>{inputProps.placeholder}</label>
                                {inputProps.options.map((option, optionIndex) => (
                                    <div key={optionIndex}>
                                        <input
                                            type="checkbox"
                                            name={option}
                                            value={option}
                                            placeholder={inputProps.placeholder}
                                            onChange={handleInputChange}
                                        />
                                        <label>{option}</label>
                                    </div>
                                ))}
                            </div>
                        );
                    } else if (inputProps.type === 'radio') {
                        return (
                            <div key={index}>
                                <label>{inputProps.placeholder}</label>
                                {inputProps.options.map((option, optionIndex) => (
                                    <div key={optionIndex}>
                                        <input
                                            type="radio"
                                            name={inputProps.placeholder} // Use placeholder as name
                                            value={option}
                                            placeholder={inputProps.placeholder}
                                            onChange={handleInputChange}
                                        />
                                        <label>{option}</label>
                                    </div>
                                ))}
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
            </form>
        </div>
    );
}

export default DynamicForm;
