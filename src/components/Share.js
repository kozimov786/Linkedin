import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import userImg from '../assets/images/user.svg'
import sendPhoto from '../assets/images/send-photo.svg'
import sendVideo from '../assets/images/send-video.svg'
import sendEvent from '../assets/images/send-events.svg'
import sendArticle from '../assets/images/send-article.svg'


function Share(props) {

  return (
    <ShareBox>
      <div>
        {props.user && props.user.photoURL ?
          <img src={props.user.photoURL} alt='user' /> :
          <img src={userImg} alt="user icon" />}
        <button onClick={props.handleClick}>Share a post</button>
      </div>

      <div>
        <button>
          <div>
            <img src={sendPhoto} alt="send pict" />
            <span>Photo</span>
          </div>
        </button>

        <button>
          <div>
            <img src={sendVideo} alt="send video" />
            <span>Video</span>
          </div>
        </button>

        <button>
          <div>
            <img src={sendEvent} alt="event" />
            <span>Event</span></div>
        </button>

        <button>
          <div>
            <img src={sendArticle} alt="article" />
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
   width: 24px;
   height: 24px;
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
   cursor: pointer;
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
const mapStateToProps = (state) => {
  return {
    loading: state.article.loading,
    user: state.user.user,
  }
}
const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Share)