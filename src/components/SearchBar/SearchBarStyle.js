import styled from 'styled-components';
import {
    colors,
    boxShadowFocus,
    breakpoints
} from '../../lib/style/theme';
import { BiSearch } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';

export const BarWrapper = styled.div`
  position: relative;
`;

export const SearchIcon = styled.figure`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 12px;
  height: 20px;
`;

export const ClearIcon = styled.figure`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 16px;
  right: 16px;
  cursor: pointer;
`;

export const Input = styled.input`
    height: 40px;
    width: 300px;
    border-radius: 4px;
    font-family: 'Roboto';
    border: solid 2px ${colors.goldenYellow};
    background-color: ${colors.mirage};
    font-size: 18px;
    font-weight: 300;
    padding: 0 40px;
    line-height: 23px;
    color: ${colors.white};
    &:focus {
        border-color: ${colors.goldenYellow};
        outline: none;
        box-shadow: ${boxShadowFocus};
    }
`;

export const Search = styled(BiSearch)`
    color: ${colors.white};
    width: 20px;
    height: 20px;
    margin-right: 40px;
`;

export const Close = styled(GrClose)`
    color: ${colors.white};
    width: 16px;
    height: 16px;
`;