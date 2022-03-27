import styled from 'styled-components';
import {
  colors,
  boxShadowFocus,
  breakpoints
} from '../../lib/style/theme';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

export const BarWrapper = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 20px;
`;

export const SearchIcon = styled.figure`
  position: absolute;
  top: 50%;
  transform: translateY(-40%);
  left: 35px;
  height: 20px;
  @media  screen and (${breakpoints.tablet}) {
    left: 8.6rem;
    height: 20px;
  }
  @media  screen and (${breakpoints.desktop}) {
      top: 18px;
      left: 15px;
  }
`;

export const ClearIcon = styled.figure`
  position: absolute;
  top: 50%;
  transform: translateY(-40%);
  height: 20px;
  right:35px;
  cursor: pointer;
  @media  screen and (${breakpoints.tablet}) {
    right:8.6rem;
  }
  @media  screen and (${breakpoints.desktop}) {
      top: 18px;
      right: 15px;
  }
`;

export const Input = styled.input`
    height: 30px;
    width: 200px;
    border-radius: 4px;
    font-family: 'Roboto';
    border: solid 2px ${colors.goldenYellow};
    background-color: ${colors.mirage};
    font-size: 16px;
    font-weight: 300;
    padding: 0 30px;
    line-height: 23px;
    color: ${colors.white};
    &:focus {
        border-color: ${colors.goldenYellow};
        outline: none;
        box-shadow: ${boxShadowFocus};
    }
    @media  screen and (${breakpoints.tablet}) {
      height: 30px;
      width: 300px;
    }
    @media  screen and (${breakpoints.desktop}) {
      height: 40px;
      font-size: 18px;
      padding: 0 40px;
      line-height: 23px;
    }
`;

export const Search = styled(BiSearch)`
    color: ${colors.white};
    width: 18px;
    height: 18px;
    margin-right: 40px;
    @media  screen and (${breakpoints.desktop}) {
      width: 20px;
      height: 20px;
    }
`;

export const Close = styled(AiOutlineClose)`
    color: ${colors.white};
    width: 18px;
    height: 18px;
    @media  screen and (${breakpoints.desktop}) {
      width: 20px;
      height: 20px;
    }
`;