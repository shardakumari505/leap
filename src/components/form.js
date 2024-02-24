import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { styled } from '@mui/material/styles';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import 'tailwindcss/tailwind.css';
import '../app/globals.css';

const StyledDatePicker = styled(DatePicker)(({ theme }) => ({
    '& .MuiInputBase-input': {
        borderRadius: 4,
        fontSize: 16,
        minWidth: '20vw',
        padding: '10px 0 10px 4px',
        height: '18px',
    }
}));

const steps = ['Step 1', 'Step 2', 'Step 3', 'Confirmation'];

const options = ['one', 'two', 'three'];

const Form = () => {
    const [error, setError] = useState('');
    const [errors, setErrors] = useState({});
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        emailId: '',
        dateOfBirth: '',
        step2: '',
        step3: '',
    });

    const handleInputChange = (fieldName, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [fieldName]: value,
        }));

        setErrors((prevErrors) => ({
            ...prevErrors,
            [fieldName]: '',
        }));

        if (fieldName === 'emailId') {
            setError('');
        }
    };

    const handleNext = () => {
        const requiredFields = ['firstName', 'lastName', 'emailId', 'dateOfBirth'];
        const newErrors = {};

        requiredFields.forEach((field) => {
            if (!formData[field]) {
                newErrors[field] = `Please enter ${field === 'dateOfBirth' ? 'a valid date' : 'a value'} for ${field}.`;
            }
        });

        const currentDate = dayjs();
        const enteredDate = dayjs(formData.dateOfBirth);

        const maxAllowedDate = currentDate.subtract(10, 'year');
        const minAllowedDate = currentDate.subtract(30, 'year');

        if (enteredDate.isAfter(maxAllowedDate) || enteredDate.isBefore(minAllowedDate)) {
            const errorMessage = 'Invalid Date of Birth. Must be between 10 and 30 years ago.';
            console.error(errorMessage);
            setError(errorMessage);
            return;
        }
        setError('');

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(formData.emailId)) {
            const errorMessage = 'Invalid email format. Please enter a valid email address.';
            console.error(errorMessage);
            setError(errorMessage);
            return;
        }

        if (Object.keys(newErrors).length > 0) {
            console.error('Form validation failed:', newErrors);
            setErrors(newErrors);
            return;
        }

        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handleBack = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
    };

    const isStepValid = () => {
        return true;
    };

    const handleDropdownChange = (selectedOption) => {
        handleInputChange('pinCode', selectedOption.value);
    };

    const formFields = [
        { step: 0, label: 'First Name', name: 'firstName', type: 'text' },
        { step: 0, label: 'Last Name', name: 'lastName', type: 'text' },
        { step: 0, label: 'Email ID', name: 'emailId', type: 'email' },
        { step: 0, label: 'Date of Birth', name: 'dateOfBirth', type: 'datePicker' },
        { step: 1, label: 'Address Line1', name: 'addressLine1', type: 'text' },
        { step: 1, label: 'Address Line2 (optional)', name: 'addressLine2', type: 'text' },
        { step: 1, label: 'Country', name: 'country', type: 'dropdown' },
        { step: 1, label: 'State', name: 'state', type: 'dropdown' }, // Assuming state needs a date picker
        { step: 1, label: 'City', name: 'city', type: 'dropdown' }, // Assuming city needs a date picker
        { step: 1, label: 'PinCode', name: 'pinCode', type: 'text' },
        // ... add more fields as needed for each step
    ];

    return (
        <div>
            <div className='flex flex-col justify-center align-middle text-center my-4'>
                <div className='text-3xl font-bold my-8'>Fill this form to check your eligibility</div>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            width: '80%',
                            height: "auto",
                            marginX: "auto"
                        },
                    }}
                >
                    <Paper elevation={3}>
                        <div className='py-4 pl-4 text-left text-base font-bold text-rgba-black'>Complete Student Profile</div>
                        <Divider />
                        <div>
                            <ul>
                                {steps.map((step, index) => (
                                    <li key={index} className={index === currentStep ? 'active' : ''}>
                                        {step}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {currentStep === 0 && (
                            <div>
                                <div className='py-4 pl-4 text-left text-xl font-normal text-rgba-black'>Let’s Enter your Personal Details</div>
                                <div className='flex flex-wrap' style={{ display: "flex", flexWrap: "wrap" }}>
                                    {formFields
                                        .filter((field) => field.step === 0)
                                        .map((field) => (
                                            <div key={field.name} className='' style={{ display: "flex", flexDirection: "column", marginInline: "16px" }}>
                                                <label className='text-xs font-semibold text-rgba-gray' style={{ paddingBottom: "6px" }}>{field.label}</label>
                                                {field.type === 'datePicker' ? (
                                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                        <StyledDatePicker
                                                            value={formData[field.name]}
                                                            onChange={(date) => handleInputChange(field.name, date)}
                                                            placeholder='DD/MM/YY'
                                                        />
                                                    </LocalizationProvider>
                                                ) : (
                                                    <input
                                                        type={field.type}
                                                        value={formData[field.name]}
                                                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                                                        style={{ minWidth: "20vw", borderRadius: "4px", border: "1px solid rgba(203, 202, 213, 1)", height: "36px", color: "rgba(142, 142, 142, 1)", fontSize: "12px", fontWeight: "400" }}
                                                        placeholder={`Enter your ${field.label.toLowerCase()}`}
                                                    />
                                                )}
                                                {errors[field.name] && (
                                                    <div className='text-red-500 my-2'>
                                                        {errors[field.name]}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                </div>
                                <div>
                                    {error && (
                                        <div className='text-red-500 my-4'>
                                            {error}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {currentStep === 1 && (
                            <div>
                                <div className='py-4 pl-4 text-left text-xl font-normal text-rgba-black'>Enter your current mailing address</div>
                                <div className='flex flex-wrap' style={{ display: "flex", flexWrap: "wrap" }}>
                                    {formFields
                                        .filter((field) => field.step === 1)
                                        .map((field) => (
                                            <div key={field.name} className='' style={{ display: "flex", flexDirection: "column", marginInline: "16px" }}>
                                                <label className='text-xs font-semibold text-rgba-gray' style={{ paddingBottom: "6px" }}>{field.label}</label>
                                                {field.type === 'datePicker' ? (
                                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                        <StyledDatePicker
                                                            value={formData[field.name]}
                                                            onChange={(date) => handleInputChange(field.name, date)}
                                                            placeholder='DD/MM/YY'
                                                        />
                                                    </LocalizationProvider>
                                                ) : field.type === 'dropdown' ? (
                                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                        <Dropdown options={options} onChange={handleDropdownChange} value={options[0]} placeholder={`Select ${field.label.toLowerCase()}`} />
                                                    </LocalizationProvider>
                                                ) : (
                                                    <input
                                                        type={field.type}
                                                        value={formData[field.name]}
                                                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                                                        style={{ minWidth: "20vw", borderRadius: "4px", border: "1px solid rgba(203, 202, 213, 1)", height: "36px", color: "rgba(142, 142, 142, 1)", fontSize: "12px", fontWeight: "400" }}
                                                        placeholder={`Enter your ${field.label.toLowerCase()}`}
                                                    />
                                                )}
                                            </div>
                                        ))}
                                </div>
                            </div>
                        )}

                        {currentStep === 2 && (
                            <div>
                                <h2>{steps[currentStep]}</h2>
                                <div>
                                    <div className='py-4 pl-4 text-left text-xl font-normal text-rgba-black'>Personal Details</div>
                                    <div className='flex flex-wrap'>
                                        {formFields
                                            .filter((field) => field.step === 0)
                                            .map((field) => (
                                                <div key={field.name} className='mx-4 px-4 py-2 flex flex-col bg-slate-500'>
                                                    <div className='font-normal text-sm'>{field.label}</div>
                                                    <div className='font-semibold text-sm'>{formData[field.name]}</div>
                                                </div>
                                            ))}
                                    </div>
                                    <div className='py-4 pl-4 text-left text-xl font-normal text-rgba-black'>Mailing Address</div>
                                    <div className='flex flex-wrap'>
                                        {formFields
                                            .filter((field) => field.step === 1)
                                            .map((field) => (
                                                <div key={field.name} className='' style={{ display: "flex", flexDirection: "column", marginInline: "16px" }}>
                                                    <label className='text-xs font-semibold text-rgba-gray' style={{ paddingBottom: "6px" }}>{field.label}</label>
                                                    <div>{formData[field.name]}</div>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        <Divider />
                        <div className='flex justify-between py-4'>
                            {currentStep > 0 && (
                                <button style={{ border: "1px solid rgba(68, 62, 255, 1)" }} className='w-40 h-219 py-4 px-4 ml-4 flex text-center justify-center text-sm rounded font-normal text-rgba-dark-blue' onClick={handleBack}>Back</button>
                            )}
                            <div className='flex-grow'></div>
                            {currentStep < steps.length - 1 && (
                                <button className='w-40 h-219 py-4 px-4 mr-4 flex text-center justify-center text-sm rounded font-normal text-rgba-white button-rgba-blue' onClick={handleNext} disabled={!isStepValid()}>
                                    Save & Continue
                                </button>
                            )}
                            {currentStep === steps.length - 1 && (
                                <button className='w-40 h-219 py-4 px-4 mr-4 flex text-center justify-center text-sm rounded font-normal text-rgba-white button-rgba-blue' onClick={handleSubmit}>Finish</button>
                            )}
                        </div>
                    </Paper>
                </Box>
            </div>
        </div>
    );
};


export default Form;
