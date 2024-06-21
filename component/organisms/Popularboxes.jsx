"use client"; // Add this line at the top

import React, { useEffect } from 'react';
import Popular from '../molecules/Popular';
import Container from '../atom/Container';
import Heading from '../atom/Heading';
import Button from '../atom/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PiGreaterThanBold } from "react-icons/pi";

function Popularboxes() {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);

    return (
        <div className='bg-blue-50 py-[100px]'>
            <Container>
                <div className="">
                    <div className="pb-[50px]">
                        <Heading level='2'>POPULAR COURSES</Heading>
                        <p className='text-[16px]' data-aos="fade-up">There are many variations of passages of Lorem Ipsum</p>
                    </div>
                    <div className="w-[100%] overflow-hidden flex gap-[20px] pb-[30px]">
                   <div className="w-[33%]"  data-aos="fade-right">
                   <Popular  
                            imageVariant='five' 
                            imageSrc='/assits/image/pop.jpg' 
                            anchorText='HTML' 
                            anchorHref='/' 
                            paragraphText='There are many variations of sages of Lorem Ipsum available, but the mrity have suffered alteration in some orm' 
                            containerClass='bg-white hover:shadow-xl border-solid border-2 border-gray-300' 
                        />
                   </div>
                     <div className="w-[33%]"  data-aos="fade-up">
                     <Popular 
                            imageVariant='five' 
                            imageSrc='/assits/image/css.jpg' 
                            anchorText='HTML' 
                            anchorHref='/' 
                            paragraphText='There are many variations of sages of Lorem Ipsum available, but the mrity have suffered alteration in some orm' 
                            containerClass='bg-white hover:shadow-xl border-solid border-2 border-gray-300' 
                        />
                     </div>
                    <div className="w-[33%]"  data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500"data-aos-duration="500">
                    <Popular 
                            imageVariant='five' 
                            imageSrc='/assits/image/javascript.jpg' 
                            anchorText='HTML' 
                            anchorHref='/' 
                            paragraphText='There are many variations of sages of Lorem Ipsum available, but the mrity have suffered alteration in some orm' 
                            containerClass='bg-white hover:shadow-xl border-solid border-2 border-gray-300' 
                        />
                    </div>
                    </div>
                    <div className="flex justify-center items-center relative px-[90px]" data-aos="fade-up">
                        <Button variant='button1'>Browse All Courses</Button>
                        <div className="absolute right-[42%] text-white">
                            <PiGreaterThanBold />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Popularboxes;
