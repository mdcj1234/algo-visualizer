import styled from 'styled-components';
import { hsl } from 'polished';

interface ContainerProps {
  arrayNumber: number;
  arraySize: number;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  margin: 5px;
  background-color: ${props =>
    hsl(230, 0.9, props.arrayNumber / (props.arraySize + 20))};
  width: ${props => `${String((10 / props.arraySize) * 100)}px`};
  height: ${props =>
    `${String((10 / props.arraySize) * 100 + props.arrayNumber * 10)}px`};
  align-items: center;
  justify-content: center;

  p {
    font-size: ${props => `${String(10 + (10 / props.arraySize) * 20)}px`};
    text-align: center;
    color: #fff;
  }
`;
