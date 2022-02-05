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
                    <SidebarLink to='About' onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='Skills' onClick={toggle}>
                        Skills
                    </SidebarLink>
                    <SidebarLink to='Services' onClick={toggle}>
                        Service
                    </SidebarLink>
                    <SidebarLink to='Works' onClick={toggle}>
                        Works
                    </SidebarLink>
                    <SidebarLink to='Resume' onClick={toggle}>
                        Resume
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='HireMe'>Hire Me</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default SideBar
