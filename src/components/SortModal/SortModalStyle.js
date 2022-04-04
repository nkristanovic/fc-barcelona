import styled from 'styled-components';
import { breakpoints, colors, boxShadowFocus } from '../../lib/style/theme';

export const SortModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.black};
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
`;

export const SortModalWrapper = styled.div`
    position: absolute;
    margin-left: 184px;
    top: 315px;
    padding: 0 0 16px;
    border-radius: 4px;
    width: 150px;
    height: 207px;
    box-shadow: ${boxShadowFocus};
    background-color: ${colors.white};
    z-index: 4;

    @media screen and (${breakpoints.mobile}) {
    margin-left: 130px;
    top: 324px;
  }
  @media screen and (${breakpoints.tablet}) {
    margin-left: 570px;
    width: 150px;
  }
  @media screen and (${breakpoints.desktop}) {
    position: absolute;
    top: 165px;
    right: 0px;
    z-index: 50;
  }
`;

export const SortModalHeader = styled.div`
  width: 150px;
  height: 40px;
  margin-bottom: 10px;
  padding: 8px 98px 8px 16px;
  border-radius: 4px;
  background-color: ${colors.goldenYellow};
  @media screen and (${breakpoints.tablet}) {
    width: 150px;
    height: 38px;
  }
`;

export const SortModalContent = styled.p`
  width: 141px;
  height: 24px;
  margin: 0px 21px 8px 16px;
  font-family: Helvetica;
  font-size: 14px;
  line-height: 1.5;
  color: ${colors.black};
  &:hover {
    cursor: pointer;
  }
  &.active {
    color: ${colors.goldenYellow};
  }
   
`;

export const SortModalTitle = styled.h2`
  width: 70px;
  height: 24px;
  margin-top: 3px;
  font-family: Helvetica;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.5;
  color: ${colors.midnightBlue};
  @media screen and (${breakpoints.tablet}) {
    height: 22px;
  }
`;

export const Triangle = styled.span`
  display: block;
 height: 0px;
 width: 0px;
 border: 10px solid transparent;
 border-top-color: ${colors.goldenYellow};
 position: absolute;
 top: -15px;
 left: calc(90% - 25px);
 transform: rotate(-180deg);
`;
