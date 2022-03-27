import styled, { css } from 'styled-components';
import { boxShadow, breakpoints, colors } from './theme';

export const SectionContent = styled.div`
    margin: auto;
    ${(props) =>
    props.columns === 2 &&
    `margin-top: 100px;
    @media screen and (${breakpoints.desktop}) {
      display: grid;
      justify-content: end;
      justify-items: end;
      grid-template-columns: auto auto;
      padding: 15px;
      padding: 15px 30px;
    }
    @media screen and (${breakpoints.desktopLarge}) {
      max-width: 1540px;
      padding: 15px 40px;
    }
  `} 
`;
export const ButtonDefault = css`
  background-color: ${colors.paprika};
  box-shadow: ${boxShadow};
  border-radius: 5px;
  width: 110px;
  height: 56px;
  color: ${colors.white};
  font-weight: 500;
  font-size: 16px;
  font-style: normal;
  line-height: 24px;
  letter-spacing: 0.8px;
  margin-top: 72px;
  border: none;
  &:hover {
    cursor: pointer;
    background-color: ${colors.mediumDarkPink};
  }
  @media screen and (${breakpoints.tablet}) {
    width: 125px;
    font-size: 18px;
  }
  @media screen and (${breakpoints.desktop}) {
    width: 135px;
  }
  @media screen and (${breakpoints.desktopLarge}) {
    width: 175px;
  }
`;

export const PrimaryButton = ({ text, onClick }) => {
  return (
    <PrimaryButtonStyle onClick={onClick}>
      {text}
    </PrimaryButtonStyle>
  );
};
export const PrimaryButtonStyle = styled.button`
  ${ButtonDefault};
`;

