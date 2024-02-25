import * as React from 'react';
import 'tailwindcss/tailwind.css';
import '../app/globals.css';
import Image from 'next/image';

function Placed() {
  const logos = [
    { src: '/glogo.png', alt: 'Google Logo',color: 'bg-slate-500' },
    { src: '/mclogo.png', alt: 'Microsoft Logo',color: 'bg-slate-400' },
    { src: '/applelogo.png', alt: 'Apple Logo',color: 'bg-slate-600' },
    { src: '/uberlogo.png', alt: 'Uber Logo', color: 'bg-slate-400' },
    { src: '/teslalogo.png', alt: 'Tesla Logo', color: 'bg-slate-600' },
    { src: '/amazonlogo.png', alt: 'Amazon Logo', color: 'bg-slate-400' },
  ];

  return (
    <div className='w-4/5 flex flex-col items-center align-middle justify-center mx-auto my-8'>
      <div className='font-bold text-3xl mt-16'>Get placed in</div>
      <div className='flex w-full h-fit mb-16 mt-8'>
        {logos.map((logo, index) => (
          <div key={index} className={`w-full flex items-center py-5 justify-around`}>
            <Image src={logo.src} alt={logo.alt} width={100} height={15} style={{width: "10vw", height:"8vh", objectFit:"contain"}} />
          </div>
        ))}
      </div>
      <div className='flex flex-col w-full bg-slate-500 h-auto rounded-2xl' style={{ background: "linear-gradient(95.83deg, #F8F8FF 0.47%, #F4E9FF 31.83%, #FFF5EC 70.04%, #E8E8FF 99.42%)", overflow:"hidden" }}>
        <div className='font-bold text-4xl ml-16 mt-8'>Why should you consider <br></br> <strong className='text-rgba-blue-shade' >LeapAdvantage?</strong></div>
        <div className='flex justify-between ml-16'>
          <div className='flex flex-col mt-8 pb-8'>
            <div className='flex my-2 py-2'>
              <Image
                src="/correct.png"
                alt="Example Image"
                width={30}
                height={10}
              />
              <div className='font-medium text-xl text-rgba-gray ml-3'><strong className='font-bold'>GRE and IELTS</strong> waiver*</div>
            </div>

            <div className='flex my-2 py-2'>
              <Image
                src="/correct.png"
                alt="Example Image"
                width={30}
                height={10}
              />
              <div className='font-medium text-xl text-rgba-gray ml-3'>High <strong className='font-bold'>admit</strong> chance</div>
            </div>

            <div className='flex my-2 py-2'>
              <Image
                src="/correct.png"
                alt="Example Image"
                width={30}
                height={10}
              />
              <div className='font-medium text-xl text-rgba-gray ml-3'>Scholarship of up to <strong className='font-bold'>₹17 lakhs</strong></div>
            </div>

            <div className='flex my-2 py-2'>
              <Image
                src="/correct.png"
                alt="Example Image"
                width={30}
                height={10}
              />
              <div className='font-medium text-xl text-rgba-gray ml-3'>Education from a <strong className='font-bold'>top-rank university</strong></div>
            </div>
          </div>
          <div className='mr-16 mb-0 pb-0' style={{ position: 'relative',  width: '450px', height: 'inherit',}}>
            {/* Image div */}
            <div className='' style={{position: 'absolute', zIndex: 4, width: '100%', height: '100%', bottom: 0, left: 0 }}>
              <Image
                src="/TeachersImage.png"
                alt="Example Image"
                width={400}
                height={200}
                style={{ width: '100%', height: '100%', objectFit:"contain"}}
              />
            </div>

            {/* Circular background div */}
            <div className='mb-0 pb-0' style={{ position: 'absolute', zIndex: 3, width: '150%', height: '100%'}}>
              <Image
                src="/bgvector.png"
                alt="Example Image"
                width={600}
                height={200}
                style={{ width: '100%', height: '100%', position: 'relative', transform: 'translate(-20%, -15%)' }}
              />
            </div>
          </div>



        </div>
      </div>
    </div>
  );
}


export default Placed;
