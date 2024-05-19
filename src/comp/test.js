import React, { useState } from 'react';

function Test() {
    const [selectedValue, setSelectedValue] = useState('');
    const [inputs, setInputs] = useState([]);
    const [inputAttributes, setInputAttributes] = useState({});
    const [options, setOptions] = useState([]);
    const [radioCounter, setRadioCounter] = useState(1);
    const [checkboxCounter, setCheckboxCounter] = useState(1);

    const predefinedOptions = [
        { value: 'text', label: 'Text' },
        { value: 'email', label: 'Email' },
        { value: 'date', label: 'Date' },
        { value: 'number', label: 'Number' },
        { value: 'checkbox', label: 'Checkbox' },
        { value: 'radio', label: 'Radio' }
    ];

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        setInputAttributes({});
        setOptions([]);
    };

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;
        setInputAttributes(prevAttributes => ({
            ...prevAttributes,
            [name]: newValue
        }));
    };

    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const addOptionInput = () => {
        setOptions([...options, '']);
    };

    const addInput = () => {
        let newInput;
        if (selectedValue === 'radio') {
            newInput = (
                <RadioExample
                    key={Date.now()}
                    options={options}
                    groupName={`radio-group-${radioCounter}`}
                    placeholder={`radio-group-${radioCounter}`}
                    handleRadioChange={handleInputChange}
                />
            );
            setRadioCounter(radioCounter + 1);
        } else if (selectedValue === 'checkbox') {
            newInput = (
                <CheckboxExample
                    key={Date.now()}
                    options={options}
                    groupName={`checkbox-group-${checkboxCounter}`}
                    handleCheckboxChange={handleInputChange}
                />
            );
            setCheckboxCounter(checkboxCounter + 1);
        } else {
            newInput = (
                <input
                    key={`${selectedValue}-${inputs.length}`}
                    type={selectedValue}
                    {...inputAttributes}
                    onChange={handleInputChange}
                />
            );
        }
        setInputs(prevInputs => [...prevInputs, newInput]);
        setInputAttributes({});
        setOptions([]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const inputArray = inputs.map((input,index) => {
            if (input.type === 'input') {
                return {
                    type: input.props.type,
                    placeholder: input.props.placeholder || '',
                    name: input.props.name || ''
                };
            } else if (input.type.name === 'RadioExample') {
                return {
                    type: 'radio',
                    placeholder: `radio-group-${index}`,
                    options: input.props.options
                };
            } else if (input.type.name === 'CheckboxExample') {
                return {
                    type: 'checkbox',
                    placeholder: 'Checkbox Group',
                    options: input.props.options
                };
            }
            return null;
        }).filter(Boolean);
        console.log(inputArray);
        sessionStorage.setItem("data", JSON.stringify(inputArray));
    };

    return (
        <div>
            <label>Select an option:</label>
            <select value={selectedValue} onChange={handleChange}>
                <option value="">Select...</option>
                {predefinedOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
            <p>Selected value: {selectedValue}</p>

            {selectedValue && (
                <form onSubmit={handleSubmit}>
                    <label>Input attributes:</label>
                    {selectedValue !== 'radio' && selectedValue !== 'checkbox' && (
                        <input
                            type="text"
                            name="placeholder"
                            value={inputAttributes.placeholder || ''}
                            placeholder="Placeholder"
                            onChange={handleInputChange}
                        />
                    )}
                    {selectedValue !== 'radio' && selectedValue !== 'checkbox' && (
                        <input
                            type="number"
                            name="maxLength"
                            value={inputAttributes.maxLength || ''}
                            placeholder="Max Length"
                            onChange={handleInputChange}
                        />
                    )}
                    {selectedValue !== 'radio' && selectedValue !== 'checkbox' && (
                        <div>
                            <input
                                type="checkbox"
                                name="required"
                                checked={inputAttributes.required || false}
                                onChange={handleInputChange}
                            />
                            <label htmlFor="required">Required</label>
                        </div>
                    )}
                    {(selectedValue === 'radio' || selectedValue === 'checkbox') && (
                        <div>
                            {options.map((option, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    value={option}
                                    placeholder={`Option ${index + 1} Label`}
                                    onChange={(e) => handleOptionChange(index, e.target.value)}
                                />
                            ))}
                            <button type="button" onClick={addOptionInput}>Add Option</button>
                        </div>
                    )}
                    <button type="button" onClick={addInput}>Add Input</button>
                    <button type="submit">Submit</button>
                </form>
            )}

            <form className='test'>
                {inputs}
            </form>
        </div>
    );
}
function RadioExample({ options, groupName, handleRadioChange }) {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (value) => {
        setSelectedOption(value);
        handleRadioChange({
            target: {
                name: groupName,
                value: value,
                type: 'radio',
                checked: true
            }
        });
    };

    return (
        <div>
            <h2>{groupName}</h2>
            {options.map((option, index) => (
                <label key={index}>
                    <input
                        type="radio"
                        placeholder={groupName} // Use groupName as the placeholder
                        value={option}
                        checked={selectedOption === option}
                        onChange={() => handleOptionChange(option)}
                    />
                    {option}
                </label>
            ))}
        </div>
    );
}

function CheckboxExample({ options, groupName, handleCheckboxChange }) {
    const [selectedOptions, setSelectedOptions] = useState(new Array(options.length).fill(false));

    const handleOptionChange = (index) => {
        const newSelectedOptions = selectedOptions.map((option, i) => index === i ? !option : option);
        setSelectedOptions(newSelectedOptions);
        handleCheckboxChange({
            target: {
                name: groupName,
                value: options[index],
                type: 'checkbox',
                checked: newSelectedOptions[index]
            }
        });
    };

    return (
        <div>
            <h2>{groupName}</h2>
            {options.map((option, index) => (
                <label key={index}>
                    <input
                        type="checkbox"
                        placeholder={groupName} // Use groupName as the placeholder
                        value={option}
                        checked={selectedOptions[index]}
                        onChange={() => handleOptionChange(index)}
                    />
                    {option}
                </label>
            ))}
        </div>
    );
}
export default Test;