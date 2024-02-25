import React, { useState, useEffect } from 'react';
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
import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import Image from 'next/image';

const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#784af4',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#784af4',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
}));

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
        color: '#784af4',
    }),
    '& .QontoStepIcon-completedIcon': {
        color: '#784af4',
        zIndex: 1,
        fontSize: 24,
    },
    '& .QontoStepIcon-circle': {
        color: 'grey',
        zIndex: 1,
        fontSize: 24,
    },
}));

function QontoStepIcon(props) {
    const { active, completed, className } = props;

    return (
        <QontoStepIconRoot ownerState={{ active }} className={className}>
            {completed ? (
                <CheckCircleIcon className="QontoStepIcon-completedIcon" />
            ) : (
                <RadioButtonCheckedIcon className="QontoStepIcon-circle" />
            )}
        </QontoStepIconRoot>
    );
}

QontoStepIcon.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    completed: PropTypes.bool,
};

const StyledDatePicker = styled(DatePicker)(({ theme }) => ({
    "& .MuiOutlinedInput-root": {
        border: '1px solid #cbcad5',
        height: '44px',
        minWidth: '20vw',
        '& fieldset': {
            borderColor: "transparent !important",
        },
        '&:hover fieldset': {
            borderColor: "transparent !important",
        },
    },
}));

const steps = ['General Details', 'Address Details', 'Confirmation'];

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
        addressLine1: '',
        addressLine2: '',
        country: '',
        state: '',
        city: '',
        pinCode: '',
    });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        handleValidation(); // Trigger validation on mount
    }, []);

    useEffect(() => {
        handleValidation();
    }, [formData, currentStep]);

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

    const handleValidation = (fieldName) => {
        const newErrors = {};

        if (currentStep === 0) {
            const requiredFields = ['firstName', 'lastName', 'emailId', 'dateOfBirth'];

            requiredFields.forEach((field) => {
                if (!formData[field]) {
                    newErrors[field] = ``;
                }
            });

            const nameRegex = /^[a-zA-Z]+$/;

            if (fieldName === 'firstName' && !nameRegex.test(formData.firstName)) {
                newErrors.firstName = 'Incorrect Entry';
            }

            if (fieldName === 'lastName' && !nameRegex.test(formData.lastName)) {
                newErrors.lastName = 'Incorrect Entry';
            }

            const currentDate = dayjs();
            const enteredDate = dayjs(formData.dateOfBirth);

            const maxAllowedDate = currentDate.subtract(10, 'year');
            const minAllowedDate = currentDate.subtract(30, 'year');

            // if (fieldName === 'dateOfBirth' && (enteredDate.isAfter(maxAllowedDate) || enteredDate.isBefore(minAllowedDate))) {
            //     newErrors.dateOfBirth = 'Invalid Date of Birth. Must be between 10 and 30 years ago.';
            // }

            if (enteredDate.isAfter(maxAllowedDate) || enteredDate.isBefore(minAllowedDate)) {
                const errorMessage = 'Invalid Date of Birth. Must be between 10 and 30 years ago.';
                console.error(errorMessage);
                setError(errorMessage);
                return;
            }
            setError('');

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (fieldName === 'emailId' && !emailRegex.test(formData.emailId)) {
                newErrors.emailId = 'Incorrect Entry';
            }
        }

        if (currentStep === 1) {
            const requiredFields = ['addressLine1', 'country', 'state', 'city', 'pinCode'];

            requiredFields.forEach((field) => {
                if (!formData[field]) {
                    newErrors[field] = ``;
                }
            });

            const addressRegex = /^[a-zA-Z0-9\s\-,]+$/;

            if (fieldName === 'addressLine1' && !addressRegex.test(formData.addressLine1)) {
                newErrors.addressLine1 = 'Incorrect Entry';
            }

            if (fieldName === 'addressLine2' && formData.addressLine2 && !addressRegex.test(formData.addressLine2)) {
                newErrors.addressLine2 = 'Incorrect Entry';
            }

            const pinCodeRegex = /^[0-9]{6}$/;

            if (fieldName === 'pinCode' && !pinCodeRegex.test(formData.pinCode)) {
                newErrors.pinCode = 'Incorrect Entry';
            }
        }

        setErrors(newErrors);
        setIsFormValid(Object.keys(newErrors).length === 0);
    };




    const handleNext = () => {
        if (isFormValid) {
            setCurrentStep((prevStep) => prevStep + 1);
        } else {
            // Handle case where the button is clicked, but form is not valid
            console.error('Form validation failed:', errors);
        }
    };

    const handleBack = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
    
        // Create a JSON Blob
        const jsonData = new Blob([JSON.stringify(formData)], { type: 'application/json' });
    
        // Create a download link
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(jsonData);
        downloadLink.download = 'formData.json';
    
        // Append the link to the body
        document.body.appendChild(downloadLink);
    
        // Trigger a click on the link to start the download
        downloadLink.click();
    
        // Remove the link from the body
        document.body.removeChild(downloadLink);
    
        // Set formSubmitted to true
        setFormSubmitted(true);
    };
    


    const handleDropdownChange = (selectedOption) => {
        setFormData((prevData) => ({
            ...prevData,
            country: selectedOption.value,
            state: selectedOption.value,
            city: selectedOption.value
        }));
    };

    const formFields = [
        { step: 0, label: 'First Name', name: 'firstName', type: 'text' },
        { step: 0, label: 'Last Name', name: 'lastName', type: 'text' },
        { step: 0, label: 'Email ID', name: 'emailId', type: 'email' },
        { step: 0, label: 'Date of Birth', name: 'dateOfBirth', type: 'datePicker' },
        { step: 1, label: 'Address Line 1', name: 'addressLine1', type: 'text' },
        { step: 1, label: 'Address Line 2', name: 'addressLine2', type: 'text' },
        { step: 1, label: 'Country', name: 'country', type: 'dropdown' },
        { step: 1, label: 'State', name: 'state', type: 'dropdown' }, // Assuming state needs a date picker
        { step: 1, label: 'City', name: 'city', type: 'dropdown' }, // Assuming city needs a date picker
        { step: 1, label: 'Pincode', name: 'pinCode', type: 'text' },
    ];

    return (
        <div className='w-full font-inter'>
            <div className='flex flex-col justify-center align-middle text-center my-4'>
                <div className='w-4/5 text-3xl font-bold my-8 mx-auto'>Fill this form to check your eligibility</div>
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
                    {formSubmitted ? (
                        <Paper elevation={3}>
                            <div className='py-4 pl-4 text-left text-base font-bold text-rgba-black'>Complete Student Profile</div>
                            <Divider />
                            <div className='w-fit h-fit bg-rgba-off-white-green border-form-submit rounded-lg mx-auto mb-20 mt-10 px-20'>
                                <div className='bg-teal flex flex-col items-center py-8'>
                                    <Image
                                        src="/formsubmitlogo.png"
                                        alt="Example Image"
                                        width={50}
                                        height={100}
                                    // style={{  position: 'relative', transform: 'translate(-20%, -15%)' }}
                                    />
                                </div>
                                <div className='font-bold text-xl text-rgba-form-submit-green p-2'>
                                    That’s all we need.
                                </div>
                                <div className='text-xl font-normal text-rgba-form-submit-green p-2'>Thank you for your time. We will get back soon</div>
                                <div className='flex justify-between py-4'>
                                </div>
                            </div>
                        </Paper>
                    ) :
                        (<Paper elevation={3}>
                            <div className='py-4 pl-4 text-left text-base font-bold text-rgba-black'>Complete Student Profile</div>
                            <Divider />
                            <div className='py-4'>
                                <Stack sx={{ width: '100%' }} spacing={4}>
                                    <Stepper alternativeLabel activeStep={currentStep} connector={<QontoConnector />}>
                                        {steps.map((label, index) => (
                                            <Step key={label}>
                                                <StepLabel StepIconComponent={QontoStepIcon} completed={index < currentStep}>
                                                    {label}
                                                </StepLabel>
                                            </Step>
                                        ))}
                                    </Stepper>
                                </Stack>
                            </div>

                            {currentStep === 0 && (
                                <div>
                                    <div className='py-4 pl-4 text-left text-xl font-normal text-rgba-black'>Let’s Enter your Personal Details</div>
                                    <div className='flex flex-wrap md:justify-start justify-center' style={{ display: "flex", flexWrap: "wrap" }}>
                                        {formFields
                                            .filter((field) => field.step === 0)
                                            .map((field) => (
                                                <div key={field.name} className='' style={{ display: "flex", flexDirection: "column", marginInline: "16px", paddingBottom: "20px" }}>
                                                    <label className='text-base font-semibold text-rgba-gray' style={{ paddingBottom: "6px" }}>{field.label} <strong className='text-rgba-alert-red'>*</strong></label>
                                                    {field.type === 'datePicker' ? (
                                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                            <StyledDatePicker
                                                                value={formData[field.name]}
                                                                onChange={(date) => handleInputChange(field.name, date)}
                                                                onBlur={() => handleValidation(field.name)}
                                                                placeholder='DD/MM/YY'
                                                            />
                                                        </LocalizationProvider>
                                                    ) : (
                                                        <input
                                                            type={field.type}
                                                            value={formData[field.name]}
                                                            onChange={(e) => handleInputChange(field.name, e.target.value)}
                                                            onBlur={() => handleValidation(field.name)}
                                                            style={{ minWidth: "20vw", borderRadius: "4px", border: "1px solid rgba(203, 202, 213, 1)", height: "44px", color: "#000000", fontSize: "16px", fontWeight: "400", outline: "none", paddingInline: "12px" }}
                                                            placeholder={`Enter your ${field.label.toLowerCase()}`}
                                                            className="custom-placeholder"
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
                                    <div className='flex flex-wrap md:justify-start justify-center' style={{ display: "flex", flexWrap: "wrap" }}>
                                        {formFields
                                            .filter((field) => field.step === 1)
                                            .map((field) => (
                                                <div key={field.name} className='' style={{ display: "flex", flexDirection: "column", marginInline: "16px", paddingBottom: "20px" }}>
                                                    {field.name != 'addressLine2' ?
                                                        (<label className='text-base font-semibold text-rgba-gray' style={{ paddingBottom: "6px" }}>{field.label}<strong className='text-rgba-alert-red'>*</strong></label>) : (<label className='text-base font-semibold text-rgba-gray' style={{ paddingBottom: "6px" }}>{field.label}</label>)}
                                                    {field.type === 'dropdown' ? (
                                                        <Dropdown options={options} onChange={handleDropdownChange} value={options[0]} placeholder={`Select ${field.label.toLowerCase()}`} />
                                                    ) : (
                                                        <input
                                                            type={field.type}
                                                            value={formData[field.name]}
                                                            onChange={(e) => handleInputChange(field.name, e.target.value)}
                                                            onBlur={() => handleValidation(field.name)}
                                                            style={{ minWidth: "20vw", borderRadius: "4px", border: "1px solid rgba(203, 202, 213, 1)", height: "44px", color: "#000000", fontSize: "16px", fontWeight: "400", outline: "none", paddingInline: "12px" }}
                                                            placeholder={`Enter your ${field.label.toLowerCase()}`}
                                                            className="custom-placeholder"
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

                            {currentStep === 2 && (
                                <div>
                                    <h2>{steps[currentStep]}</h2>
                                    <div>
                                        <div className='py-4 pl-4 text-left text-xl font-normal text-rgba-black'>Personal Details</div>
                                        <div className='flex flex-wrap'>
                                            {formFields
                                                .filter((field) => field.step === 0)
                                                .map((field) => (
                                                    <div key={field.name} className='mx-4 px-4 py-2 flex flex-col min-w-64'>
                                                        <div className='font-normal text-sm'>{field.label}</div>
                                                        {field.type === 'datePicker' ?
                                                            (<div className='text-base font-bold '>{dayjs(formData[field.name]).format('DD/MM/YYYY')}</div>) : (<div className='text-base font-bold '>{formData[field.name]}</div>)}

                                                    </div>
                                                ))}
                                        </div>
                                        <div className='py-4 pl-4 text-left text-xl font-normal text-rgba-black'>Mailing Address</div>
                                        <div className='flex flex-wrap'>
                                            {formFields
                                                .filter((field) => field.step === 1)
                                                .map((field) => (
                                                    <div key={field.name} className='min-w-64 mx-4 px-4 py-2 my-4' style={{ display: "flex", flexDirection: "column", marginInline: "16px" }}>
                                                        <label className='text-sm font-normal text-rgba-gray' style={{ paddingBottom: "6px" }}>{field.label}</label>
                                                        <div className='text-base font-bold '>{formData[field.name]}</div>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            <Divider />
                            <div className='flex justify-between py-4'>
                                {currentStep > 0 && (
                                    <button style={{ border: "1px solid rgba(68, 62, 255, 1)" }} className='w-40 h-219 py-4 px-4 ml-4 mr-2 flex text-center justify-center text-sm rounded font-normal text-rgba-dark-blue' onClick={handleBack}>Back</button>
                                )}
                                <div className='flex-grow'></div>
                                {currentStep < steps.length - 1 && (
                                    <button
                                        className={`w-40 h-219 py-4 px-4 mr-4 ml-2 flex text-center justify-center text-sm rounded font-normal ${!isFormValid
                                                ? 'text-rgba-gray bg-gray-300 cursor-not-allowed' // Style for disabled state
                                                : 'text-rgba-white button-rgba-blue' // Style for enabled state
                                            }`}
                                        onClick={handleNext}
                                        disabled={!isFormValid} // Disable the button if the form is not valid
                                    >
                                        Save & Continue
                                    </button>
                                )}
                                {currentStep === steps.length - 1 && (
                                    <button className='w-40 h-219 py-4 px-4 mr-4 flex text-center justify-center text-sm rounded font-normal text-rgba-white button-rgba-blue' onClick={handleSubmit}>Finish</button>
                                )}
                            </div>
                        </Paper>)}
                </Box>
            </div>
        </div>
    );
};


export default Form;
