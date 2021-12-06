import React from 'react';
import styled from 'styled-components';

import userImg from '../assets/images/user.svg'

export default function Share({ show, setShow, handleClick }) {

  return (
    <ShareBox>
      <div>
        <img src={userImg} alt="user icon" />
        <button onClick={handleClick}>Share a post</button>
      </div>

      <div>
        <button>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#70B5F9" class="mercado-match" width="24" height="24" focusable="false">
              <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
            </svg>
            <span>Photo</span>
          </div>
        </button>

        <button>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#7FC05E" class="mercado-match" width="24" height="24" focusable="false">
              <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
            </svg>
            <span>Video</span>
          </div>
        </button>

        <button>
          <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#E7A33E" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
          </svg>
            <span>Event</span></div>
        </button>

        <button>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#FC9294" class="mercado-match" width="24" height="24" focusable="false">
              <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
            </svg>
            <span>Write Article</span>
          </div>
        </button>
      </div>
    </ShareBox>
  )
}
const Card = styled.div`
 width: 100%;
 background-color: #fff;
 border-radius: 5px;
 margin-bottom: 8px;
 border:none;
 box-shadow: 0 0 0 1px rgb(0 0 0 / 15%),0 0 0 rgb(0 0 0 / 20%);
`

const ShareBox = styled(Card)`
 display: flex;
 flex-direction: column;
 color: #958b7b;
 padding: 8px 16px;
 padding-bottom: 0;
 margin: 0 0 8px;
 div{
   &:first-child{
     display: flex;
     align-items: center;
     button{
      flex-grow: 1;
      margin: 4px 0;
      padding-left: 16px;
      border-radius: 35px;
      font-weight: 600;
      border: 1px solid rgba(0,0,0,0.15);
      text-align: left;
      cursor: pointer;
     }
   }
 }
 img{
   width: 48px;
   height: 48px;
   border-radius: 59px;
   margin-right: 8px;
 }
 div{
   display: flex;
   justify-content: space-around;
   button{
    outline: none;
    border: none;
    font-size: 14px;
    line-height: 1.5;
    min-height: 48px;
   color: rgba(0,0,0,0.6);
   background-color: transparent;
   div{
     display: flex;
     align-items: center;
   }
   span{
     color: #666666;
     margin-left: 8px;
   }
   &:hover{
     background-color: rgba(0,0,0,0.08);
   }
   }
 }
`