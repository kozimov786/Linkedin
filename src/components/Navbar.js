import React from 'react'
import styled from 'styled-components'
import homeIcon from '../assets/images/nav-home.svg'
import netIcon from '../assets/images/nav-network.svg'
import jobsIcon from '../assets/images/nav-jobs.svg'
import messagingIcon from '../assets/images/nav-messaging.svg'
import notesIcon from '../assets/images/nav-notifications.svg'
import UserImg from '../assets/images/user.svg'
import downArrow from '../assets/images/down-icon.svg'
import workImg from '../assets/images/nav-work.svg'

export default function Navbar() {
  return (
    <Nav>
      <NavListWrap>
        <NavList className='active'>
          <a>
            <img src={homeIcon} alt="home icon" width="22" height="20" />
            <span>Home</span>
          </a>
        </NavList>

        <NavList>
          <a>
            <img src={netIcon} alt="network icon" />
            <span>My Network</span>
          </a>
        </NavList>

        <NavList>
          <a>
            <img src={jobsIcon} alt="jobs icon" width="22" height="20" />
            <span>Jobs</span>
          </a>
        </NavList>

        <NavList>
          <a>
            <img src={messagingIcon} alt="messages icon" width="22" height="20" />
            <span>Messaging</span>
          </a>
        </NavList>

        <NavList>
          <a>
            <img src={notesIcon} alt="notification icon" width="22" height="20" />
            <span>Notification</span>
          </a>
        </NavList>

        <User>
          <a>
            <img src={UserImg} alt="User img" />
            <div>
              <span>Me</span>
              <img className='arrow' src={downArrow} alt="Down arrow" />
            </div>
          </a>
          <SignOut>
            <a>Sign Out</a>
          </SignOut>
        </User>

        <Work>
          <a>
            <img src={workImg} alt="User img" />
            <div>
              <span>Work</span>
              <img className='arrow' src={downArrow} alt="Down arrow" />
            </div>
          </a>
        </Work>
      </NavListWrap>
    </Nav>
  )
}
const Nav = styled.nav`
 margin-left: auto;
 display: block;
 @media only screen and (max-width:768px){
   position: fixed;
   left: 0;
   bottom: 0;
   background-color: #fff;
   width: 100%;
 }
`

const NavListWrap = styled.ul`
  display: flex;
  list-style-type: none;
  flex-wrap: nowrap;
  padding: 0;
  margin: 0;
  .active{
    span::after{
      content: '';
      width:100%;
      transform: scale(1);
      border-bottom: 2px solid rgba(0,0,0,0.9);
      position: absolute;
      bottom: -2px;
      left: 0;
    }
  }
`


const NavList = styled.li`
 display: flex;
 align-items: center;
 width: 80px;
 display: block;
 a{
  text-align: center;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  font-size: 12px;
  font-weight: normal;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
  text-decoration: none;
  position: relative;
  span{
    color: rgba(0,0,0,0.6);
    text-align: center;
    font-weight: bolder;
  }
  img{
    width: 26px;
    height: 24px;
  }
 }
 &:hover,
 &:active{
   a{
     span{
       color: rgba(0,0,0,0.9);
     }
   }
 }
`

const SignOut = styled.div`
  position: absolute;
  top: 43px;
  left: 6px;
  white-space: nowrap;
  padding: 10px 12px;
  background-color: #fff;
  border-radius:0 0 5px 5px;
  box-shadow: 0 2px 1px 0 #000000;
  cursor: pointer;
  display: none;
  a{
    font-weight: bolder;
  }
`

const User = styled(NavList)`
position: relative;
  a > {
    img{
      border-radius: 50%;
    }
    div{
      display: flex;
      align-items: center;
    }
  }
  .arrow{
    width:12px;
    height: 10px;
  }
  &:hover{
    ${SignOut}{
      display: block;
    }
  }
`

const Work = styled(User)`
  border-left:1px solid rgba(0,0,0,0.08);
`