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
  margin-bottom: 30px;
  margin-top: 30px;
  @media  screen and (${breakpoints.tablet}) {
      text-align: left;
  }
`;

export const SearchIcon = styled.figure`
  position: absolute;
  top: 50%;
  transform: translateY(-40%);
  left: 32px;
  height: 20px;
  @media  screen and (${breakpoints.tablet}) {
    top: 14px;
    left: 10px;
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
  right:10px;
  cursor: pointer;
  @media  screen and (${breakpoints.tablet}) {
    top: 14px;
    right: 16.4rem;
  }
  @media  screen and (${breakpoints.desktop}) {
      top: 18px;
      right: 5.4rem;
  }
`;

export const Input = styled.input`
    height: 30px;
    width: 250px;
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

