'use client'; // Ensure this is at the top

import React, { useEffect } from 'react';
import Time from '../molecules/Time';
import Container from '../atom/Container';
import Heading from '../atom/Heading';
import AOS from 'aos';
import 'aos/dist/aos.css';

function TimeAcadmy() {
  useEffect(() => {
    AOS.init({
      duration: 500
    });
  }, []);

  return (
    <div className=" overflow-hidden">
      <div className="py-[100px] text-center">
        <Heading level='2'>Latest News</Heading>
        <p className='text-[16px]'>There are many variations of passages</p>
      </div>
      <Container>
        <div className='w-full flex  gap-[30px]'>
          <div className="w-[32%] " data-aos="fade-right">
            <Time 
              imgSrc='/assits/image/box.jpg' 
              headingText='Learn English in ease' 
              date='15 jun 2024' 
              views={59} 
              description='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.'
              msg='19' 
              buttonText='READ MORE' 
            />  
          </div>
          <div className="w-[32%]" data-aos="fade-up">
            <Time 
              imgSrc='/assits/image/box.jpg' 
              headingText='Learn English in ease' 
              date='15 jun 2024' 
              views={59} 
              description='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.'
              msg='19' 
              buttonText='READ MORE'
            />
          </div>
          <div className="w-[32%]" data-aos="fade-left">
            <Time 
              imgSrc='/assits/image/box.jpg' 
              headingText='Learn English in ease' 
              date='15 jun 2024' 
              views={59} 
              description='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.'
              msg='19' 
              buttonText='READ MORE'
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TimeAcadmy;
