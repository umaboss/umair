"use client"
import React, { useEffect } from 'react';
import Heading from '../atom/Heading';
import Paragraph from '../atom/Paragraph';
import Button from '../atom/Button';
import Container from '../atom/Container';
import '../../app/globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Banner() {
  useEffect(() => {
    AOS.init({
        duration: 1000
    });
  }, []);

  return (
    <div className='banner w-[100vw] justify-center items-center flex'>
      <Container>
        <div className='pt-[70px]'>
          <div className='pb-[20px]' data-aos="fade-up" data-aos-duration="1000">
            <Heading level='1'>Education Needs <br /> Complete Solution</Heading>
          </div>
          <div className='pb-[50px]' data-aos="fade-up" data-aos-duration="1000">
            <Paragraph para='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum saepe impedit, deserunt ratione sunt temporibus eos officia earum sequi magnam, necessitatibus labore dolore esse odio est perferendis repellendus beatae distinctio.' />
          </div>
          <div className="" data-aos="fade-right">
          <Button variant='button1'>VIEW COURSES</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
