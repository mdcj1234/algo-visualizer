import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

interface MarkerProps {
  marker1?: boolean;
  marker2?: boolean;
  marker3?: boolean;
  arraySize: number;
}

let color = '#252733';

const Marker: React.FC<MarkerProps> = ({
  marker1 = false,
  marker2 = false,
  marker3 = false,
  arraySize,
  children,
}) => {
  if (marker1) {
    color = '#00f';
  } else if (marker2) {
    color = '#ff0';
  } else if (marker3) {
    color = '#f00';
  }

  return (
    <Container
      isVisible={marker1 || marker2}
      markerColor={color}
      arraySize={arraySize}
    >
      {children}
    </Container>
  );
};

Marker.propTypes = {
  marker1: PropTypes.bool,
  marker2: PropTypes.bool,
  marker3: PropTypes.bool,
  arraySize: PropTypes.number.isRequired,
};

Marker.defaultProps = {
  marker1: false,
  marker2: false,
  marker3: false,
};

export default Marker;
