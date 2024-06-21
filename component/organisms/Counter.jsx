"use client"; // Add this line at the very top

import React, { useEffect } from 'react'
import '../../app/globals.css'
import Counter1 from '../molecules/Counter1'
import Container from '../atom/Container'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Counter() {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  return (
    <div className="session overflow-hidden">
      <Container>
        <div className="py-[100px]">
          <div className='flex w-[100%] gap-[20px]'>
            <div className="w-[25%]" data-aos="fade-right">  <Counter1 targetCount={36} /></div>
            <div className="w-[25%]" data-aos="fade-up"><Counter1 targetCount={76} /></div>
            <div className="w-[25%]" data-aos="fade-up"><Counter1 targetCount={129} /></div>
            <div className="w-[25%]" data-aos="fade-left"><Counter1 targetCount={39} /></div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Counter;
