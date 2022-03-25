import styled from 'styled-components';
import {
    breakpoints,
    colors
} from '../../lib/style/theme';

export const NavHamburger = styled.div`
    width: 25px;
    position: fixed;
    right:15px;
    @media screen and (${breakpoints.desktop}) {
        display: none;
    }
    @media screen and (${breakpoints.tablet}) {
       right: 15px;
    }
    @media screen and (${breakpoints.mobileLarge}) {
       right: 20px;
    }
`;

export const NavHamburgerLine = styled.div`
    width: 100%;
    height: 2px;
    border-radius: 100px;
    background-color: ${colors.white};
    margin-bottom: 6px;
    &:last-child {
        margin-bottom: 0;
    }
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  margin-top: 80px;
  transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(100%)'};
  max-width: 1024px;
  background-color: ${colors.goldenYellow};
  position: fixed;
  top: 0;
  right: 0;
  text-align: center;
  height: 100%;
  width: 100%;
  font-weight: bold;
  
  @media screen and (${breakpoints.desktop}) {
    display: none;
    }
`;

export const NavHamb = styled.div`
    padding: 30px 10px;
    text-decoration:none;
    color: ${colors.black};
    &:last-child {
        padding: 0;
    }
    @media (${breakpoints.mobileLarge}) {
        font-size: 18px;
    }
`;