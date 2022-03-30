import styled from 'styled-components';
import {
  colors,
} from '../../lib/style/theme';

export const ScrollWrapper = styled.div`
  width: 30px;
  height: 30px;
  position: fixed;
  bottom: 2vh;
  right: 5%;
  border: 2px solid ${colors.goldenYellow};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  &:hover {
    background: ${colors.goldenYellow};
  }
`;