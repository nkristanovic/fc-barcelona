import styled from 'styled-components';
import { breakpoints } from './theme';

export const SectionContent = styled.div`
    margin: auto;
  @media screen and (${breakpoints.desktopLarge}) {
    ${(props) =>
        props.columns === 2 &&
        `display: grid;
        grid-template-columns: auto auto;
        justify-content: space-between;`}
    max-width: 1440px;
  }
`;