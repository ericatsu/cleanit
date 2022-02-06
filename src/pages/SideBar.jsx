import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, 
    SidebarLink, SidebarMenu, SideBtnWrap, SidebarRoute  } from '../elements/SideBarElements'

const SideBar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/' onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to='About' onClick={toggle}>
                        About Us
                    </SidebarLink>
                    <SidebarLink to='Services' onClick={toggle}>
                        Service
                    </SidebarLink>
                    <SidebarLink to='Blog' onClick={toggle}>
                        Blog
                    </SidebarLink>
                    <SidebarLink to='/' onClick={toggle}>
                        FAQs
                    </SidebarLink>
                    <SidebarLink to='Members' onClick={toggle}>
                        Members
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='HireMe'>Quote Now</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default SideBar;
