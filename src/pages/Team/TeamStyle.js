import styled from 'styled-components';
import {
  breakpoints,
  colors
} from '../../lib/style/theme';

export const Position = styled.p`
    color: ${colors.white};
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    margin: 31px 0;
`;
export const Empty = styled.p`
    color: ${colors.white};
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    margin: 31px 0;
    visibility: hidden;
`;
export const Left = styled.div`
  @media  screen and (${breakpoints.desktop}) {
    position: sticky;
    top:150px;
    height: 1px;
  }
`;

export const Right = styled.div`
    @media  screen and (${breakpoints.desktop}) {
      padding-left: 40px;
    }
    @media  screen and (${breakpoints.desktopLarge}) {
      padding-left: 48px;
    }
`;
