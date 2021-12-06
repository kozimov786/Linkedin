import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Profile from './Profile';
import MainContent from './MainContent';
import Feeds from './Feeds';
import { Navigate } from 'react-router';
import { connect } from 'react-redux'

function Home(props) {
  return (
    <Container>
      {!props.user && <Navigate to='/' />}
      <Header />
      <Main>
        <Profile />
        <MainContent />
        <Feeds />
      </Main>
    </Container>
  )
}
const Container = styled.div`
 width: 100%;
 max-width: 1168px;
 margin: 0 auto;
 padding-left: 20px;
 padding-right: 20px;
`

const Main = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 55px;
`

const mapStateToProps = (state) => {
  return {
    user: state.user.user
  }
}
export default connect(mapStateToProps)(Home)