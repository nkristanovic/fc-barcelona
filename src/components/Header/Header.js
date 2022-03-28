import React from 'react';
import LogoImage from '../../assets/images/fcb.svg';
import Hamburger from '../Hamburger/Hamburger';
import {
    HeaderWrapper,
    Inner,
    LogoContainer,
    Logo,
    Nav,
    NavItem,
} from './HeaderStyle';

const links = {
    Home: 'Home',
    Team: 'Team'
}

const Header = () => {
    return (
        <HeaderWrapper>
            <Inner>
                <LogoContainer to="/">
                    <Logo src={LogoImage} alt="Logo" />
                </LogoContainer>
                <Hamburger />
                <Nav>
                    <NavItem activeclassname="active" to="/">{links.Home}</NavItem>
                    <NavItem activeclassname="active" to="/team">{links.Team}</NavItem>
                </Nav>
            </Inner>
        </HeaderWrapper>
    );
}

export default Header;