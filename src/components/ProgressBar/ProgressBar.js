/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  return <Wrapper>
    <ProgressContainer>
      <Progress value={value}/>
    </ProgressContainer>
  </Wrapper>;
};

const Wrapper = styled.div`
  padding: 5px;
  background-color: lightgrey;
  border-radius: 4px;
  box-shadow: inset 0px 4px 4px grey;
`;

const ProgressContainer = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Progress = styled.div`
  width: ${p => p.value}%;
  height: 16px;
  background-color: blue;
`;

export default ProgressBar;
