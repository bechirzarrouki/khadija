import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sideequipment from "./Sideequipment";
import './Equipment.css';
import axios from 'axios';
import Navbar from "../navbar/Navbar";

function Ajouterequipment() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        df: '',
        da: '',
        data: '',
    });

    const [selectedValue, setSelectedValue] = useState('');
    const [inputs, setInputs] = useState([]);
    const [inputAttributes, setInputAttributes] = useState({});
    const [options, setOptions] = useState([]);
    const [radioCounter, setRadioCounter] = useState(1);
    const [checkboxCounter, setCheckboxCounter] = useState(1);

    const navigate = useNavigate();

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
                    className='input'
                    key={`${selectedValue}-${inputs.length}`}
                    type={selectedValue}
                    placeholder={inputAttributes.placeholder || ''}
                    label={inputAttributes.label || ''}
                    maxLength={inputAttributes.maxLength || undefined}
                    onChange={handleInputChange}
                />
            );
        }
        setInputs(prevInputs => [...prevInputs, newInput]);
        setInputAttributes({});
        setOptions([]);
    };

    const handleMainFormChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const inputArray = inputs.map((input, index) => {
                if (input.type === 'input') {
                    return {
                        type: input.props.type,
                        label: input.props.label || '',
                        placeholder: input.props.placeholder || '',
                        required: input.props.required || false
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
                } else {
                    return null;
                }
            }).filter(Boolean);

            formData.data = JSON.stringify(inputArray);
            console.log('Submitted Data:', formData);

            const response = await axios.post('http://localhost:8000/api/equipements', formData);
            navigate('/consultequipment');
        } catch (error) {
            console.error('Erreur lors de l\'ajout de l\'équipement:', error);
        }
    };

    return (
        <div>
            <Navbar />
            <div className='container'>
                <Sideequipment />
                <div className="ajouterequipment">
                    <div className='nompage'>
                        <p>Ajouter équipement:</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Nom d'équipement</label>
                        <input
                            id="name"
                            type="text"
                            value={formData.name}
                            onChange={handleMainFormChange}
                        />
                        <br />
                        <label htmlFor="df">Date de vérification</label>
                        <input
                            id="df"
                            type="date"
                            value={formData.df}
                            onChange={handleMainFormChange}
                        />
                        <br />
                        <label htmlFor="da">Date d'étalonnage</label>
                        <input
                            id="da"
                            type="date"
                            value={formData.da}
                            onChange={handleMainFormChange}
                        />
                        <br />
                        <label htmlFor="des">Description</label>
                        <input
                            type="text"
                            id="description"
                            placeholder="Description"
                            value={formData.description}
                            onChange={handleMainFormChange}
                        />
                        <br />
                        <label>Select an option:</label>
                        <select value={selectedValue} onChange={handleChange}>
                            <option value="">Select...</option>
                            {predefinedOptions.map((option) => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                        <p>Selected value: {selectedValue}</p>

                        {selectedValue && (
                            <div>
                                <label>Input attributes:</label>
                                {selectedValue !== 'radio' && selectedValue !== 'checkbox' && (
                                    <div>
                                        <input
                                            type="text"
                                            name="label"
                                            value={inputAttributes.label || ''}
                                            placeholder="Label"
                                            onChange={handleInputChange}
                                        />
                                        <input
                                            type="text"
                                            name="placeholder"
                                            value={inputAttributes.placeholder || ''}
                                            placeholder="Placeholder"
                                            onChange={handleInputChange}
                                        />
                                        <input
                                            type="number"
                                            name="maxLength"
                                            value={inputAttributes.maxLength || ''}
                                            placeholder="Max Length"
                                            onChange={handleInputChange}
                                        />
                                        <div>
                                            <input
                                                type="checkbox"
                                                name="required"
                                                checked={inputAttributes.required || false}
                                                onChange={handleInputChange}
                                            />
                                            <label htmlFor="required">Required</label>
                                        </div>
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
                            </div>
                        )}
                        <div className='test'>
                            {inputs}
                        </div>
                        <button type='submit' className='btnajouter'>Ajouter</button>
                    </form>
                </div>
            </div>
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
                        placeholder={groupName}
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
                        placeholder={groupName}
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

export default Ajouterequipment;
