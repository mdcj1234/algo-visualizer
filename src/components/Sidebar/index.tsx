import React from 'react';
import { FaSortAmountUp } from 'react-icons/fa';

import { Container, ImageContent } from './styles';

const SideBar: React.FC = ({ children }) => (
  <Container>
    <ImageContent>
      <FaSortAmountUp size={50} />
    </ImageContent>

    {children}
  </Container>
);

export default SideBar;
