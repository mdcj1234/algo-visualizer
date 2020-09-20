import styled, { css } from 'styled-components';

interface MakerProps {
  isVisible: boolean;
  markerColor: string;
  arraySize: number;
}

export const Container = styled.div<MakerProps>`
  display: flex;
  margin: 5px;
  background-color: transparent;
  width: ${props => `${String((10 / props.arraySize) * 100)}px`};
  height: ${props => `${String((10 / props.arraySize) * 100)}px`};
  align-items: center;
  justify-content: center;
  ${props =>
    !props.isVisible &&
    css`
      visibility: hidden;
    `}

  svg {
    flex: 1;
    color: ${props => props.markerColor};
    margin: 5px;
    width: 100px;
    height: 100px;
  }
`;
