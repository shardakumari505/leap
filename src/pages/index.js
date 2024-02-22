import React from 'react';
import { Tabs } from '@mui/base/Tabs';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import { Tab, tabClasses } from '@mui/base/Tab';
import Box from '@mui/material/Box';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import { styled } from '@mui/system';
import { useTheme } from '@mui/system';

const tabWidth = '268px'



const Home = () => {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    // aria-label="secondary tabs example"
                >
                    <Tab value={1} label="Item One" />
                    <Tab
                        value={2}
                        sx={{
                            backgroundColor: value === 2 ? 'rgba(36, 24, 72, 1)' : 'rgba(255, 255, 255, 1)',
                            minWidth: tabWidth,
                            borderRadius: '10px',
                            border: '1px solid rgba(229, 229, 229, 1)',
                            margin: 0,
                            color: value === 2 ? 'rgba(255, 255, 255, 1)' : 'rgba(51, 46, 191, 1)',
                        }}

                        icon={<PhoneMissedIcon style={{ backgroundColor: "rgba(234, 235, 255, 1)", padding: "5px", borderRadius: "6px" }} />}
                        iconPosition="start"
                        label="Program & Eligibility" 
                    />

                    <Tab value={3} label="Item Three" />
                </Tabs>
            </Box>
        </div>
    );
};

export default Home;


