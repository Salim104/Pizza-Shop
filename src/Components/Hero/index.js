import React,{useState} from "react";
import Navbar from "../Navbar";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./HeroElements";
import SideBar from '../SideBar/index'
function Hero() {
  const [isOpen,setIsOpen] = useState(false)

  const toggle = () => {
    return setIsOpen(!isOpen);
  }
  return (
    <HeroContainer>
      <Navbar toggle={toggle}></Navbar>
      <SideBar toggle={toggle} isOpen={isOpen}></SideBar>
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Pizza Ever</HeroH1>
          <HeroP>Ready in 60 seconds</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
