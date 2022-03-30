import styled from 'styled-components';
import {
    colors,
    breakpoints,
} from '../../lib/style/theme';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background: ${colors.mirage};
`;

export const Inner = styled.div`
    height: 100%;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (${breakpoints.mobileLarge}) {
        padding: 15px 20px;
    }
    @media screen and (${breakpoints.tablet}) {
        padding: 15px 25px;
    }
    @media screen and (${breakpoints.desktop}) {
        padding: 15px 0;
        max-width: 993px;
        margin: 0 auto;
    }
    @media screen and (${breakpoints.desktopLarge}) {
        max-width: 1540px;
        padding: 15px 40px;
    }

`;

export const LogoContainer = styled(NavLink)`
    display: block;
    width: 133px;
    height: 30px;
    
    @media screen and (${breakpoints.desktop}) {
        width: 177px;
        height: 40px;
    }
    @media screen and (${breakpoints.desktopLarge}) {
        width: 249px;
        height: 55px;
    }
`;

export const Logo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export const Nav = styled.nav`
    display: none;
    @media screen and (${breakpoints.desktop}) {  
    display: block;
    }
`;

export const NavItem = styled(NavLink)`
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    @media screen and (${breakpoints.desktop}) {
        display: inline-block;
        color: ${colors.white};
        line-height: 50px;
        font-weight: 400;
        font-size: 16px;
        margin: 15px 0;
        margin-right: 49px;
        &:hover {
            color: ${colors.goldenYellow};
            cursor: pointer;
        }
        &:last-child {
            margin-right: 0;
        }
        &.active {
            color: ${colors.goldenYellow};
        }
    }
    @media screen and (${breakpoints.desktopLarge}) {
        font-size: 18px;
    }
`;
