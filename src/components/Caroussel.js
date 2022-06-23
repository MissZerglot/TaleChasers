import {ArrowLeftOutlined, ArrowRightOutlined} from "@material-ui/icons";
import styled from "styled-components";
import React from 'react'
import images from '../images/talie.png';
import { Button } from './Button';

const Container = styled.div `
    width: 100%; 
    height: 100vh; 
    display: flex; 
    background-color: transparent;  
    position: relative; 
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
    `
const CarousselWrapper = styled.div `
    `

const Slide = styled.div `
    display: flex; 
    align-items: center; 
    width: 100vw; 
    height: 100vh; 
    `
const ImgContainer = styled.div `
    flex: 1; 
    height: 100%; 
    `
const Image = styled.img `
    height: 80%; 
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
    return (
        <Container> {/* here I am using props to separate the left arrow from the right, allowing me to place them on two different sides of the page */}
            <Arrow direction="left">
                <ArrowLeftOutlined/>
            </Arrow>
            <CarousselWrapper>
                <Slide>
                    <ImgContainer>
                        <Image src={images}/>

                    </ImgContainer>

                    <InfoContainer>
                        <Title> NEW ARRIVALS!                  
                        </Title>
                        <Description>
                            Don't compromise on lifsaving gear.
                            Get 25% off for fresh adventurers!
                        </Description>
                        <ShopButton> 
                            Shop Now!
                        </ShopButton>
                    </InfoContainer>
                </Slide>
            </CarousselWrapper>

            <Arrow direction="right">
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Caroussel;
