/* eslint-disable arrow-parens */
/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */

import styled, { css } from 'styled-components';
import { shade, transparentize } from 'polished';

interface ContainerPorps {
  isSelected: boolean;
}

export const Container = styled.button<ContainerPorps>`
  cursor: pointer;

  display: flex;
  width: 100%;
  align-items: center;
  align-content: center;
  height: 56px;
  transition: background-color 0.2s;
  color: #a4a6b3;
  font-size: 16px;
  text-align: left;
  border: 0;
  background-color: transparent;

  &:hover {
    background: ${shade(0.1, '#363740')};
  }

  ${props =>
    props.isSelected &&
    css`
      color: #fff;
      background: ${transparentize(0.9, '#fc3c8d')};
    `}

  svg {
    margin-left: 32px;
    margin-right: 24px;
  }
`;
