import React from 'react';
import styled from 'styled-components';

import feedIcon from '../assets/images/feed-icon.svg'
import userImg from '../assets/images/user.svg'
import plusImg from '../assets/images/plus-icon.svg'
import rightIcon from '../assets/images/right-icon.svg'


export default function Feeds() {
  return (
    <Feed>
      <Title>
        <h4>Add to your feed</h4>
        <img src={feedIcon} alt="feed icon" />
      </Title>
      <Follow>
        <img className='user-img' src={userImg} alt="user img" />
        <div>
          <p>Linkedin</p>
          <span>Company Internet</span>
          <button>
            <span>
              <img src={plusImg} alt="plus icon" />
              <span>Follow</span>
            </span>
          </button>
        </div>
      </Follow>

      <Follow>
        <img className='user-img' src={userImg} alt="user img" />
        <div>
          <p>freeCodeCamp</p>
          <span>Company Internet</span>
          <button>
            <span>
              <img src={plusImg} alt="plus icon" />
              <span>Follow</span>
            </span>
          </button>
        </div>
      </Follow>

      <Follow>
        <img className='user-img' src={userImg} alt="user img" />
        <div>
          <p>EPAM</p>
          <span>Company Internet</span>
          <button>
            <span>
              <img src={plusImg} alt="plus icon" />
              <span>Follow</span>
            </span>
          </button>
        </div>
      </Follow>
      <Link>View all recommondations <img src={rightIcon} alt="right icon" /></Link>
    </Feed>
  )
}

const Feed = styled.div`
 width: 100%;
 max-width: 315px;
 background-color: #fff;
 border-radius: 10px;
 border:none;
 box-shadow: 0 0 0 1px rgb(0 0 0 / 15%),0 0 0 rgb(0 0 0 / 20%);
 padding: 12px;
`
const Title = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 h4{
   margin: 0;
 }
 img{
   width: 16px;
   height: auto;
   cursor: pointer;
 }
`

const Follow = styled.div`
 display: flex;
 align-items: center;
 margin-top: 10px;
 margin-bottom: 10px;
 .user-img{
   width: 48px;
   height: 48px;
   border-radius: 50%;
   margin-right: 5px;
 }
 div{
   display: flex;
   flex-direction: column;
   p{
     margin: 0;
     font-size: 14px;
     font-weight: 600;
   }
   span{
     font-size: 12px;
     color: rgba(0,0,0,0.6);
   }

   button{
     border:1px solid rgba(0,0,0,0.6);
     padding: 6px 16px;
     margin-top: 5px;
     cursor: pointer;
     border-radius: 59px;
     color: rgba(0,0,0,0.6);
     background-color: #fff;
     span{
       display: flex;
       align-items: center;
       img{
         width: 16px;
         height: 16px;
         margin-right: 5px;
       }
       span{
         font-size: 16px;
       }
     }
     &:hover{
       background-color: rgba(0,0,0,0.08);
       box-shadow:inset 0 0 0 1px  rgba(0,0,0,0.6);
     }
   }
 }
`

const Link = styled.a`
 font-size: 14px;
 color: rgba(0,0,0,0.6);
 cursor: pointer;
 font-weight: 600;
 display: flex;
 align-items: center;
 img{
   width: 16px;
   height: auto;
   margin-left: 5px;
 }
`