import React from 'react'
import Heading from '../atom/Heading'
import Paragraph from '../atom/Paragraph'
import Button from '../atom/Button'
import Container from '../atom/Container'
import CustomImage from '../atom/CustomImage'

function Provide() {
    return (
        <div>
            <Container>
                <div className='provide flex w-[100%] pt-[100px] pb-[50px] justify-between'>
                    <div className="left w-[40%]">
                        <div className='pb-[20px]'  data-aos="fade-up" data-aos-duration="1000"><Heading level='2'>Provide best <span className='text-[40px] font-semibold text-yellow-500'>education <br /> services</span> for you</Heading></div>
                        <p className='text-[16px] pb-[15px]'  data-aos="fade-up" data-aos-duration="1000">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <p className='text-[16px]  pb-[50px]'  data-aos="fade-up" data-aos-duration="1000">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <div className="" data-aos="fade-right" data-aos-duration="1000" >
                        <Button variant='button1'>Learn More</Button>
                        </div>
                    </div>
                    <div className="right w-[40%]" data-aos="zoom-in">
                        <CustomImage src='/assits/image/abut2.jpg' variant='five'>
                        </CustomImage>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default Provide