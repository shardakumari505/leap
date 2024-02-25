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
import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';


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
        // width: 8,
        // height: 8,
        // borderRadius: '50%',
        // backgroundColor: 'currentColor',
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
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
};

const StyledDatePicker = styled(DatePicker)(({ theme }) => ({
    "& .MuiOutlinedInput-root": {
        border: '1px solid #cbcad5',
        height: '44px',
        minWidth: '20vw',
        '& fieldset': {
            borderColor: "transparent !important", // Add !important to ensure specificity
        },
        '&:hover fieldset': {
            borderColor: "transparent !important", // Add !important to ensure specificity
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

        if (currentStep === 0) {
            const requiredFields = ['firstName', 'lastName', 'emailId', 'dateOfBirth'];
            const newErrors = {};

            requiredFields.forEach((field) => {
                if (!formData[field]) {
                    newErrors[field] = `Please enter ${field === 'dateOfBirth' ? 'a valid date' : 'a value'} for ${field}.`;
                }
            });

            if (Object.keys(newErrors).length > 0) {
                console.error('Form validation failed:', newErrors);
                setErrors(newErrors);
                return;
            }

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

            setCurrentStep((prevStep) => prevStep + 1);
        }

        if (currentStep === 1) {
            const requiredFields = ['addressLine1', 'country', 'state', 'city', 'pinCode'];
            const newErrors = {};

            requiredFields.forEach((field) => {
                if (!formData[field]) {
                    newErrors[field] = `Please enter a value for ${field}.`;
                }
            });

            if (Object.keys(newErrors).length > 0) {
                console.error('Form validation failed:', newErrors);
                setErrors(newErrors);
                return;
            }
            setError('');

            setCurrentStep((prevStep) => prevStep + 1);
        }
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
        <div className='w-full'>
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
                                <div className='flex flex-wrap' style={{ display: "flex", flexWrap: "wrap" }}>
                                    {formFields
                                        .filter((field) => field.step === 0)
                                        .map((field) => (
                                            <div key={field.name} className='' style={{ display: "flex", flexDirection: "column", marginInline: "16px", paddingBottom: "20px" }}>
                                                <label className='text-base font-semibold text-rgba-gray' style={{ paddingBottom: "6px" }}>{field.label}</label>
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
                                <div className='flex flex-wrap' style={{ display: "flex", flexWrap: "wrap" }}>
                                    {formFields
                                        .filter((field) => field.step === 1)
                                        .map((field) => (
                                            <div key={field.name} className='' style={{ display: "flex", flexDirection: "column", marginInline: "16px", paddingBottom: "20px" }}>
                                                <label className='text-base font-semibold text-rgba-gray' style={{ paddingBottom: "6px" }}>{field.label}</label>
                                                {field.type === 'dropdown' ? (
                                                    <Dropdown options={options} onChange={handleDropdownChange} value={options[0]} placeholder={`Select ${field.label.toLowerCase()}`} />
                                                ) : (
                                                    <input
                                                        type={field.type}
                                                        value={formData[field.name]}
                                                        onChange={(e) => handleInputChange(field.name, e.target.value)}
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
