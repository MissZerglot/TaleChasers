import {ArrowLeftOutlined, ArrowRightOutlined} from "@material-ui/icons";
import styled from "styled-components";
import React from 'react'
import { useState } from "react";
import images from '../images/talie.png';
import { Button } from './Button';
import { sliderItems } from '../data'

const Container = styled.div `
    width: 100%; 
    height: 100vh; 
    display: flex; 
    background-color: transparent;  
    position: relative; 
    overflow: hidden; 
    `
const Arrow = styled.div `
    width: 50px; 
    height: 50px; 
    background-color: #fff7f6; 
    border-radius: 50%; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    position: absolute; 
    top: 0; 
    bottom: 0; 
    //  here I am using props to separate the left arrow from the right, allowing me to place them on two different sides of the page
    left: ${
    props => props.direction === "left" && "10px"
};
    right: ${
    props => props.direction === "right" && "10px"
};
    margin: auto; 
    cursor: pointer; 
    opacity: 0.5; 
    z-index: 2; 
    `
const CarousselWrapper = styled.div `
    height: 100%; 
    display: flex; 
    transform: translateX(${(props) => props.slideIndex * -100}vw); 
    transition: all 1.5s ; 
    `

const Slide = styled.div `
    display: flex; 
    align-items: center; 
    width: 100vw; 
    height: 100vh; 
    background-color: #${props=> props.bg}; 
    `
const ImgContainer = styled.div `
    flex: 1; 
    height: 100%; 
    `
const Image = styled.img `
    height: 75%; 
    `
const InfoContainer = styled.div `
    flex: 1; 
    padding: 50px; 
    `
const Title = styled.h1 `
    font-size: 70px; 
    `
const Description = styled.p `
    margin: 50px 0px; 
    font-size: 20px; 
    font-weight: 500; 
    letter-spacing: 1px;
    `
const ShopButton = styled.button `
    background-color: transparent;
    color: #000;
    padding: 10px 20px;
    border: 1px solid black;
    transition: all 0.3s ease-out;
    font-size: 20px; 
    cursor: pointer; 
    `
export const Caroussel = () => { 
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => { 

        if (direction === "left") {
            // set the slideindex to move to the next image. If that is not possible, go back to the last image of the line 
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 3 );
        } 
         // repeat this for the right button
        else {
            setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0 ); 
        } 
    };
    return (
        <Container> {/* here I am using props to separate the left arrow from the right, allowing me to place them on two different sides of the page */}
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <CarousselWrapper slideIndex={slideIndex}>
                {sliderItems.map(item=>(   
                <Slide bg={item.bg}> 
                    <ImgContainer>
                        <Image src={item.img}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title> {item.title}                  
                        </Title>
                        <Description> {item.description}
                        </Description>
                        <ShopButton> 
                            Shop Now!
                        </ShopButton>
                    </InfoContainer>
                </Slide>
                ))}
            </CarousselWrapper>

            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Caroussel;
