import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

interface ArrayBlockProps {
  arrayNumber: number;
  arraySize: number;
}

const ArrayBlock: React.FC<ArrayBlockProps> = ({
  arrayNumber,
  arraySize,
  children,
}) => (
  <Container arrayNumber={arrayNumber} arraySize={arraySize}>
    {children}
  </Container>
);

ArrayBlock.propTypes = {
  arrayNumber: PropTypes.number.isRequired,
  arraySize: PropTypes.number.isRequired,
};

export default ArrayBlock;
