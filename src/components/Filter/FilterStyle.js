import styled from 'styled-components';
import { colors, breakpoints } from '../../lib/style/theme';
import { MdFilterList } from 'react-icons/md';
export const Wrapper = styled.div`
    display: block;
`;

export const Dodaj = styled.div`
`;

export const FilterWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
  @media  screen and (${breakpoints.desktop}) {
      display: none;
    }
`;
export const FilterList = styled(MdFilterList)`
  width: 20px;
  height: 20px;
  color: ${colors.white};
  margin-right: 10px;
`;

export const FilterText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: ${colors.white};
`;

export const TitleWrapper = styled.div`
    background: linear-gradient(89.93deg, #A50044 0.05%, #003568 99.94%);
    width: 100%;
    height: 80px;
    position: relative;
    margin-bottom: 40px;
    @media  screen and (${breakpoints.desktop}) {
      width: 375px;
      height: 80px;
    }
`;
export const LabelWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    &:hover{
        cursor: pointer;
    }
`;

export const Title = styled.h1`
    position: absolute;
    font-family: 'Roboto', sans-serif;
    color:${colors.white};
    font-weight: 500;
    font-size: 26px;
    line-height: 40px;
    margin: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    @media  screen and (${breakpoints.tablet}) {
      font-size: 30px;
      line-height: 35px;
    }
`;

export const FilterOption = styled.div`
  margin-bottom: 6px;
`;

export const Categories = styled.div`
  display: block;
`;

export const Category = styled.div``;

export const InputCheckbox = styled.input`
  display: none;
`;

export const InputRange = styled.input`
    margin-right: 10px;
    width: 150px;
    @media  screen and (${breakpoints.desktop}) {
      width: 200px;
    }
`;

export const Label = styled.label`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    margin-bottom: 16px;
    display: inline-block;
    color: ${colors.white};
`;

export const LabelFilter = styled.label`
    display: none;
    @media  screen and (${breakpoints.desktop}) {
      display: block;
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 23px;
      color: ${colors.white};
      margin-bottom: 30px;
    }
`;

export const CheckboxOptionLabel = styled.label`
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 16px;
  padding-left: 35px;
  position: relative;
  display: block;
  cursor: pointer;
  color: ${colors.white};
  &::before {
    content: '';
    height: 10px;
    width: 10px;
    position: absolute;
    top: 6px;
    left: 10px;
    border: 2px solid ${colors.white};
    background-color: ${colors.mirage};
  }
  [type='checkbox']:checked + &::after {
    content: '';
    height: 10px;
    width: 10px;
    position: absolute;
    top: 6px;
    left: 10px;
    border: 2px solid #ffffff;
    background-color: ${colors.goldenYellow};
  }
`;

export const HorizontalLine = styled.div` 
    background-color: ${colors.mercury};
    height: 1px;
    width: 100%;
    margin-bottom: 19px;
`;