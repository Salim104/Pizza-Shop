import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarMenu,
  SideBarLink,
  SideBtnWrap,
  SideBarRouter,
} from "./SideBarElement";
function SideBar({toggle,isOpen}) {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}  >
      <Icon>
        <CloseIcon></CloseIcon>
      </Icon>
      <SideBarMenu>
        <SideBarLink to="/">Pizza</SideBarLink>
        <SideBarLink to="/">Deserts</SideBarLink>
        <SideBarLink to="/">Full Menu</SideBarLink>
      </SideBarMenu>
      <SideBtnWrap>
        <SideBarRouter to="/">Order Now</SideBarRouter>
      </SideBtnWrap>
    </SideBarContainer>
  );
}

export default SideBar;
