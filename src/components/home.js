import * as React from 'react';
import { Tabs } from '@mui/base/Tabs';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { Tab } from '@mui/base/Tab';
import 'tailwindcss/tailwind.css';
import '../app/globals.css';
import CottageIcon from '@mui/icons-material/Cottage';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Image from 'next/image';


function Home() {
    return (
        <div className='w-4/5 mx-auto h-fit mt-24 pb-24'>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "10px", marginBottom: "12px" }}>
                <span className='text-xl font-normal p-2'>About Case Western University</span>
                <span className='text-4xl font-bold mb-5'>Learn about the program, fees, jobs & more</span>
            </div>
            <Tabs defaultValue={1}>
                <TabsList className="mb-4 rounded-xl flex font-sans items-center justify-center content-between min-w-tabs-list shadow-lg">
                    <Tab
                        slotProps={{
                            root: ({ selected, disabled }) => ({
                                className: `font-sans ${selected
                                    ? 'text-white bg-rgba-blue'
                                    : 'text-rgba-light-blue bg-rgba-white '
                                    } ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                                    } text-sm font-bold h-16 w-full p-2 m-1.5 border-0 rounded-md flex items-center  focus:outline-0 focus:shadow-outline-purple-light`,
                                style: {
                                    border: '1px solid rgba(229, 229, 229, 1)',
                                },

                            }),
                        }}
                        value={1}

                    >
                        <CottageIcon style={{ height: "40px", width: "40px", color: "rgba(51, 46, 191, 1)", backgroundColor: "rgba(234, 235, 255, 1)", padding: "5px", marginRight: "10px", borderRadius: "6px" }} />
                        Overview
                    </Tab>
                    <Tab
                        slotProps={{
                            root: ({ selected, disabled }) => ({
                                className: `font-sans ${selected
                                    ? 'text-white bg-rgba-blue'
                                    : 'text-rgba-light-blue bg-rgba-white '
                                    } ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                                    } text-sm font-bold h-16 w-full p-2 m-1.5 border-0 rounded-md flex items-center  focus:outline-0 focus:shadow-outline-purple-light`,
                                style: {
                                    border: '1px solid rgba(229, 229, 229, 1)',
                                },

                            }),
                        }}
                        value={2}

                    >
                        <CastForEducationIcon style={{ height: "40px", width: "40px", color: "rgba(51, 46, 191, 1)", backgroundColor: "rgba(234, 235, 255, 1)", padding: "5px", marginRight: "10px", borderRadius: "6px" }} />
                        Program & Eligibility
                    </Tab>
                    <Tab
                        slotProps={{
                            root: ({ selected, disabled }) => ({
                                className: `font-sans ${selected
                                    ? 'text-white bg-rgba-blue'
                                    : 'text-rgba-light-blue bg-rgba-white '
                                    } ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                                    } text-sm font-bold h-16 w-full p-2 m-1.5 border-0 rounded-md flex items-center  focus:outline-0 focus:shadow-outline-purple-light`,
                                style: {
                                    border: '1px solid rgba(229, 229, 229, 1)',
                                },

                            }),
                        }}
                        value={3}

                    >
                        <BusinessCenterIcon style={{ height: "40px", width: "40px", color: "rgba(51, 46, 191, 1)", backgroundColor: "rgba(234, 235, 255, 1)", padding: "5px", marginRight: "10px", borderRadius: "6px" }} />
                        Placement & Career
                    </Tab>
                    <Tab
                        slotProps={{
                            root: ({ selected, disabled }) => ({
                                className: `font-sans ${selected
                                    ? 'text-white bg-rgba-blue'
                                    : 'text-rgba-light-blue bg-rgba-white '
                                    } ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                                    } text-sm font-bold h-16 w-full p-2 m-1.5 border-0 rounded-md flex items-center  focus:outline-0 focus:shadow-outline-purple-light`,
                                style: {
                                    border: '1px solid rgba(229, 229, 229, 1)',
                                },

                            }),
                        }}
                        value={4}

                    >
                        <CardMembershipIcon style={{ height: "40px", width: "40px", color: "rgba(51, 46, 191, 1)", backgroundColor: "rgba(234, 235, 255, 1)", padding: "5px", marginRight: "10px", borderRadius: "6px" }} />
                        Fees & Financing
                    </Tab>
                </TabsList>
                <TabPanel className="w-full font-sans text-sm mt-16 flex justify-between flex-wrap" value={1}>
                    <div className='text-lg text-justify' style={{ width: "50%" }}>
                        The Case Western Reserve University is located in Cleveland, Ohio, US.
                        The Masters in Computer Science from Case Western Reserve University provides students with experiential and applied learning that ensures a higher level of understanding of the field. It is a 30-credit STEM-designated program.<br></br><br></br>
                        The degree is delivered in collaboration with Case Western Reserve University’s College of Engineering and includes 6 months in India and 1.5 years on campus in Ohio, US.
                        The curriculum offers a challenging study experience for individuals with technical credentials.
                    </div>
                    <div style={{ position: 'relative' }}>
                        <Image
                            src="/gpoverview.png"
                            alt="Example Image"
                            width={50}
                            height={25}
                            style={{ borderRadius: "12px", position: "absolute", top: 0, left: "50%", transform: "translateY(-50%)", zIndex: 2 }}
                        />
                        <Image
                            src="/image11.png"
                            alt="Example Image"
                            width={500}
                            height={300}
                            style={{ marginBottom: '-5px', borderRadius: "12px", zIndex: 1 }}
                        />
                        <div className='h-32 z-10 width-inherit flex justify-center' style={{ position: 'absolute', bottom: '-30px', left: 0, right: 0, alignItems: "center", borderRadius: "12px", background: 'linear-gradient(96.94deg, #F3EDFF 34.36%, rgba(255, 217, 190, 0.21) 95.05%)', backdropFilter: "blur(10px)", }} >
                            <div style={{ height: "5vw", width: "10vw", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "10px" }}>
                                <span className='text-3xl font-bold text-rgba-light-blue'>
                                    #1
                                </span>
                                <span className='text-base font-medium'>
                                    Private university in Ohio
                                </span>
                            </div>
                            <div style={{ height: "5vw", width: "10vw", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "10px" }}>
                                <span className='text-rgba-light-blue text-3xl font-bold'>
                                    42nd
                                </span>
                                <span className='text-base font-medium'>
                                    Best engineering school in USA
                                </span>
                            </div>

                        </div>
                    </div>
                </TabPanel>
                <TabPanel className="w-4/5 font-sans text-sm" value={2} style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", marginLeft:"auto", marginRight:"auto" }}>
                    <div className='text-3xl font-semibold mb-8'>Program Timeline</div>
                    <div className='flex justify-between'>
                        <div className='text-lg text-justify' style={{ width: "50%" }}>
                            <div className='text-xl font-normal mb-16 ml-6'>
                                <strong style={{ fontWeight: 'bold' }}>1st Semester </strong>(In India)
                                <ul className="list-disc pl-5 text-rgba-gray text-base font-normal mt-4">
                                    <li className='py-1 text-lg'>Start 1st semester in India </li>
                                    <li className='py-1 text-lg'>Study while working part-time in India</li>
                                    <li className='py-1 text-lg'>Get Visa support and mentorship from Leap</li>
                                    <li className='py-1 text-lg'>Move to USA after 1st semester</li>
                                </ul>
                            </div>
                            <div className='text-xl font-normal mt-8 ml-6'>
                                <strong style={{ fontWeight: 'bold' }}>2nd, 3rd & 4th Semester </strong>(In USA)
                                <ul className="list-disc pl-5 text-rgba-gray text-base font-normal mt-4">
                                    <li className='py-1 text-lg'>Move to the USA for 2nd, 3rd and 4th semester </li>
                                    <li className='py-1 text-lg'>Get access to on-campus jobs, fellowships and more</li>
                                    <li className='py-1 text-lg'>Graduate and get a 3-year post study work visa</li>
                                    <li className='py-1 text-lg'>Get placement support and land a full-time job!</li>
                                </ul>
                            </div>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <Image
                                src="/prog1.png"
                                alt="Example Image"
                                width={500}
                                height={300}
                                style={{ marginBottom: '-5px', borderRadius: "12px", zIndex: 1 }}
                            />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel className="w-full font-sans text-sm flex justify-center" value={3}>
                    <div style={{ display: "flex", flexDirection: "column", width: "50%", alignItems: "center", justifyContent: "center" }}>
                        <div className='text-lg font-normal mb-4'>MS in Computer Science opens up many career opportunities in various fields such as <strong style={{ fontWeight: 'bold' }}> software development, data science, artificial intelligence, cyber security, cloud computing</strong>, etc. </div>
                        <div><Image
                            src="/career1.png"
                            alt="Example Image"
                            width={300}
                            height={150}
                            style={{ borderRadius: "12px", zIndex: 1 }}
                        /></div>
                    </div>
                </TabPanel>
                <TabPanel className="w-full font-sans text-sm flex justify-center" value={4}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div className='text-lg text-rgba-light-blue font-medium mb-4 w-3/6'>
                            <p>With Leap Advantage, you save almost ₹17 lakhs on tuition fees.
                                <br></br>
                                <br></br>
                                Leap has partnered with multiple loan providers to help you get loans for both Indian (1st sem) and US parts (2nd, 3rd, 4th sem) of your education.</p>
                            <ul className="list-disc pl-5 text-rgba-gray text-base font-normal mt-4">
                                <li className='py-1'>Collateral-free loans available</li>
                                <li className='py-1'>100% online process</li>
                                <li className='py-1'>Flexible repayment</li>
                            </ul>
                        </div>
                        <div className='flex flex-col mr-8 text-center'>
                            <div className='flex bg-rgba-blue w-80 h-50 rounded-lg'>
                                <div className='flex flex-col justify-center text-center'>
                                    <span className='text-base font-bold text-rgba-white mt-4'>With Leap Advantage</span>
                                    <span className='text-xs font-medium text-rgba-tab-gray py-1'>(1st Sem in India + last 3 Sem in USA)</span>
                                    <span className='text-xs font-normal text-rgba-tab-gray my-4'>Tuition Fees <br></br><strong className='text-xl font-bold text-rgba-green'>₹37 lakhs</strong></span>
                                </div>
                                <div className='w-0.5 my-6 bg-rgba-gray'></div>
                                <div className='flex flex-col justify-center text-center'>
                                    <span className='text-base font-bold text-rgba-white mt-4'>Studying at CWRU normally</span>
                                    <span className='text-xs font-medium text-rgba-tab-gray py-1'>(4 Semesters on <br></br>campus)</span>
                                    <span className='text-xs font-normal text-rgba-tab-gray my-4'>Tuition Fees <br></br><strong className='text-xl font-bold text-rgba-green'>₹54 lakhs</strong></span>
                                </div>
                            </div>
                            <div className='text-xs font-normal italic'>Tuition fee is subject to change</div>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
}


export default Home;