import React from 'react';
import styled from 'styled-components';
import Header from './Header';

export default function Home() {
  return (
    <Container>
      <Header />
    </Container>
  )
}
const Container = styled.div`
 width: 100%;
 max-width: 1228px;
 margin: 0 auto;
 padding-left: 20px;
 padding-right: 20px;
`