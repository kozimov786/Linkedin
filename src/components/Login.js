import React from 'react';
import styled from 'styled-components';
import LogoImg from '../assets/images/login-logo.svg'
import HeroImg from '../assets/images/login-hero.svg'
import GoogleImg from '../assets/images/google.svg'
import { connect } from 'react-redux';

import { signInApi } from '../actions';
import { Navigate } from 'react-router';



function Login(props) {
  return (
    <Container>
      {props.user && <Navigate to='/home' />}
      <Nav>
        <a href="/">
          <img src={LogoImg} alt="logo of linkedin" width='135' height='34' />
        </a>
        <div>
          <Join>Join now </Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to proffessional community</h1>
          <img className='hero-img' src={HeroImg} alt="hero img" />
        </Hero>
        <Form>
          <Google onClick={() => props.signIn()}>
            <img src={GoogleImg} alt="google img" />
            <p>Sign in with Google</p>
          </Google>
        </Form>
      </Section>
    </Container>
  )
}

const Container = styled.div`
 max-width: 1168px;
 padding: 0 20px;
 margin: 0 auto;
`
const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 16px;
  justify-content: space-between;
  flex-wrap: nowrap;
  & > a{
    display: block;
  }
`
const Join = styled.a`
  text-decoration: none;
  color: rgba(0,0,0,0.7);
  padding: 10px 24px;
  border-radius: 24px;
  transition: background 0.2s ease;
  margin-right: 12px;
  &:hover{
    background-color:rgba(0,0,0,0.08);
    color: rgba(0,0,0,0.9);
    cursor: pointer;
  }
`
const SignIn = styled.a`
 box-shadow:inset 0 0 0 1px #0a66c2;
 color: #0a66c2;
 font-weight: bold;
 padding: 10px 24px;
 border-radius: 24px;
 transition: background 0.2s ease;
 &:hover {
   background-color: rgba(112,181,249,0.15);
   cursor: pointer;
 }
`
const Section = styled.section`
  padding: 60px 0 139px;
`
const Hero = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1{
    font-size: 56px;
    font-weight: 200;
    color: #2977c9;
    width: 55%;
    line-height: 70px;
    @media only screen and (max-width:968px){
     width: 100%;
     font-size: 40px;
     text-align: center;
     line-height: 2;
   }
   @media only screen and (max-width:768px){
     width: 100%;
     font-size: 20px;
     line-height: 2;
   }
  }
  @media only screen and (max-width:968px){
    flex-direction: column;
    justify-content: center;
  }
  .hero-img{
     width: 680px;
     height: auto;
     @media only screen and (max-width:968px){
     width: 480px;
     height: auto;
    }
    @media only screen and (max-width:668px){
     width: 280px;
     height: auto;
    }
   }
`
const Form = styled.div`
 margin-top: -120px;
`

const Google = styled.button`
 display: flex;
 width: 408px;
 align-items: center;
 justify-content: center;
 background-color: #fff;
 border: none;
 border-radius: 24px;
 height: 56px;
 cursor: pointer;
 transition: background 0.3s ease;
 img{
   margin-right: 10px;
   width: 28px;
   height: auto;
 }
 p{
   font-size: 18px;
   letter-spacing: 2;
 }
 &:hover{
   background-color: rgba(0,0,0,0.06);
 }
`

const mapStateToProps = (state) => {
  return {
    user: state.user.user
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: () => (dispatch(signInApi()))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)