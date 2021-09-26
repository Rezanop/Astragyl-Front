import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${(props) => {
    //console.log('props: ', props);
    return props.theme.colors.primary;
  }};
`;

const Home: FC = () => {
  return (
    <Wrapper>
      <p>Home Page</p>
    </Wrapper>
  );
};

export default Home;
