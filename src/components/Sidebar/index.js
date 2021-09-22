import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements';
import  './form.css';
const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
            <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>

      </form>
    </div>

            </SidebarMenu>
            <SideBtnWrap>
            <SidebarRoute to= "/">Login</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
            
        
    );
};

export default Sidebar;

