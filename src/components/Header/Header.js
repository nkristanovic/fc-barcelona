import React from 'react';
import LogoImage from '../../assets/images/fcb.svg';
import {
    HeaderWrapper,
    Inner,
    LogoContainer,
    Logo,
    Nav,
    NavItem,
} from './HeaderStyle';

const Header = () => {
    return (
        <HeaderWrapper>
            <Inner>
                <LogoContainer to="/">
                    <Logo src={LogoImage} alt="Logo" />
                </LogoContainer>
                <Nav>
                    <NavItem activeClassName="active" exact to="/">Home</NavItem>
                    <NavItem activeClassName="active" exact to="/team">Team</NavItem>
                </Nav>
            </Inner>
        </HeaderWrapper>
    );
}

export default Header;