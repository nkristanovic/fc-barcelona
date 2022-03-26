import styled from 'styled-components';
import {
    colors,
    breakpoints
} from '../../lib/style/theme';
import xavi from '../../assets/images/xavi.png';

export const SectionHero = styled.section`
    background-image: url(${xavi});
    margin-top: 80px;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Overlay = styled.div`
    background-color: ${colors.blackOverlay};
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (${breakpoints.mobileLarge}) {
        justify-content: flex-start;
    }
`;

export const Content = styled.div`
    align-items: center;
    width: 100%;
    padding: 0 15px; 
    @media screen and (${breakpoints.mobileLarge}) {
        padding: 0 25px;
    }
    @media screen and (${breakpoints.desktop}) {
        padding: 0;
        max-width: 993px;
        margin: 0 auto;
    }
    @media screen and (${breakpoints.desktopLarge}) {
        max-width: 1280px;
    }
`;

export const Heading = styled.h1`
    color:${colors.goldenYellow};
    line-height: 70px;
    font-weight: 700;
    font-style: normal;
    font-size: 24px;
    @media screen and (${breakpoints.tablet}) {
        font-size: 32px;
    }
    @media screen and (${breakpoints.desktop}) {
        font-size: 43px;
    }
    @media screen and (${breakpoints.desktopLarge}) {
        font-size: 60px;
    }
`;

export const Subheading = styled.p`
    line-height: 24px;
    font-weight: 400;
    color: ${colors.white};
    font-size: 13px;
    margin-top: 42px;
    max-width: 670px;
    @media screen and (${breakpoints.tablet}) {
        font-size: 14px;
        max-width: 730px;
    }
    @media screen and (${breakpoints.desktop}) {
        font-size: 15px;
        max-width: 770px;
    }
    @media screen and (${breakpoints.desktopLarge}) {
        font-size: 16px;
        max-width: 810px;
    }
`;