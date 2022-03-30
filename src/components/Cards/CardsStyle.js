import styled from 'styled-components';
import { colors, breakpoints } from '../../lib/style/theme';

export const Card = styled.div`
    display: block;
    margin-top: 30px;
    @media screen and (${breakpoints.mobileLarge}) {
        width: 250px;
    }
    
    @media screen and (${breakpoints.desktop}) {
        width: 288px;
        height: 288px;
        padding: 8px 0 0 0;
        margin-bottom: 34px;
    }
`;

export const Image = styled.img`
    width: 250px;
    height: 250px;
    object-fit: cover;
    @media screen and (${breakpoints.desktop}) {
        width: 278px;
        height: 278px;
    }
`;
export const Wrapper = styled.div`
    &:after {
        display: block;
        position: relative;
        background-image: linear-gradient(0deg, #181733 0%, rgba(24, 23, 51, 0) 100%);
        margin-top: -150px;
        height: 150px;
        content: '';
    }
`;

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Name = styled.h2`
    align-items: center;
    font-family: 'Roboto', sans-serif;
    color: ${colors.white};
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    @media  screen and (${breakpoints.tablet}) {
        font-size: 18px;
    }
    @media  screen and (${breakpoints.desktop}) {
        font-size: 19px;
        line-height: 23px;
    }
`;
export const Hidden = styled.div`
   display: none;
`;

export const Text = styled.p`
    font-family: 'Roboto', sans-serif;
    color: ${colors.mercury}; 
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 4px;
    @media  screen and (${breakpoints.tablet}) {
        line-height: 18px;
        margin-bottom: 6px;
    }
    @media  screen and (${breakpoints.desktop}) {
        font-size: 16px;
        line-height: 19px;
        margin-bottom: 8px;
    }
`;

export const Title = styled.div`
    justify-content: center;
    display: flex;
    padding: 230px 34px 0 34px;
    width: 100%;
    text-align: center;
`;

export const Item = styled.div`
    position: absolute;
    width: 288px;
    height: 288px;
    &:hover ${Title} {
        padding: 170px 34px 0;
    }
    &:hover ${Hidden} {
        display: block;
    }
`;

export const NumberInfo = styled.p`
    font-family: 'Roboto', sans-serif;
    color: ${colors.white};
    font-weight: 600;
    margin-right: 5px;
    font-size: 17px;
    line-height: 20px;
    @media  screen and (${breakpoints.tablet}) {
        font-size: 18px;
    }
    @media  screen and (${breakpoints.desktop}) {
        font-size: 19px;
        line-height: 23px;
    }
`;
export const Position = styled.p`
    font-family: 'Roboto', sans-serif;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    text-align:center;
    @media  screen and (${breakpoints.tablet}) {
        font-size: 14px;
    }
`;

export const HorizontalLine = styled.div` 
    background-color: ${colors.mercury};
    height: 1px;
    width: 250px;
    margin: 0 auto;
    margin-top: 9px;
    @media  screen and (${breakpoints.desktop}) {
        width: 278px;
        height: 1px;
        margin-top: 9px;
    }
`;

export const Information = styled.div` 
    display: flex;
    justify-content: center;
`;

export const Info = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4px;
    margin-right: 35px;
    &:last-child{
        margin-right: 0;
    }
`;
export const Age = styled.p`
    font-family: 'Roboto', sans-serif;
    color: ${colors.white}; 
    font-weight: 700;
    font-size: 17px;
    line-height: 18px;
    @media  screen and (${breakpoints.desktop}) {
        font-size: 18px;
        line-height: 21px;
    }
`;

export const Nationality = styled.p` 
    font-family: 'Roboto', sans-serif;
    color: ${colors.white};
    font-weight: 700;
    font-size: 17px;
    line-height: 18px;
    @media  screen and (${breakpoints.desktop}) {
        font-size: 18px;
        line-height: 21px;
    }
`;

export const Value = styled.p` 
    font-family: 'Roboto', sans-serif;
    color: ${colors.white};
    font-weight: 700;
    font-size: 17px;
    line-height: 18px;
    @media  screen and (${breakpoints.desktop}) {
        font-size: 18px;
        line-height: 21px;
    }
`;

