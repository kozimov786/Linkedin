import React from 'react';
import styled from 'styled-components';
import ellipse from '../assets/images/ellipse.svg';
import userImg from '../assets/images/user.svg'
import LikeImg from '../assets/images/like.svg'
import CommentsImg from '../assets/images/comments.svg'
import ShareImg from '../assets/images/share.svg'
import SendImg from '../assets/images/send.svg'


export default function Posts() {
  return (
    <div>
      <Post>
        <Article>
          <SharedActor>
            <a>
              <UserImg src={userImg} alt="" />
              <div>
                <h5>Title</h5>
                <p>Info</p>
                <span>Date</span>
              </div>
              <button>
                <img src={ellipse} alt="" />
              </button>
            </a>
          </SharedActor>
          <Description>Description</Description>
          <SharedImage>
            <a>
              <img src="https://picsum.photos/300/200" alt="" />
            </a>
          </SharedImage>
          <SocialCounts>
            <li>
              <button>
                <div>
                  <img src="https://static-exp1.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8" alt="" />
                  <img src="https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" alt="" />
                  <img src="https://static-exp1.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22" alt="" />
                  <span>75</span>
                </div>
              </button>
            </li>
            <li>
              <a>2 comments</a>
            </li>
          </SocialCounts>
          <FlexWrapper>
            <button>
              <Flex>
                <img src={LikeImg} alt="like icon" />
                <span>Like</span>
              </Flex>
            </button>
            <button>
              <Flex>
                <img src={CommentsImg} alt="comment icon" />
                <span>Comments</span>
              </Flex>
            </button>
            <button>
              <Flex>
                <img src={ShareImg} alt="share icon" />
                <span>Share</span>
              </Flex>
            </button>
            <button>
              <Flex>
                <img src={SendImg} alt="send icon" />
                <span>Send</span>
              </Flex>
            </button>
          </FlexWrapper>
        </Article>
      </Post>
    </div>
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
const Post = styled(Card)`

`
const Article = styled.div``

const SharedActor = styled.div`
padding: 12px;
a{
  display: flex;
  align-items: center;
  div{
    display: flex;
    flex-direction: column;
    margin-left: 10px;
   h5{
     font-size: 14px;
     font-weight: 600;
     margin: 0;
   }
   p{
     margin: 0;
     color: rgba(0,0,0,0.8);
     font-size: 12px;
     line-height: 1;
   }
   span{
     color: rgba(0,0,0,0.6);
     font-size: 12px;
     line-height: 1;
   }
  }
  button{
    margin-left: auto;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
}
`

const UserImg = styled.img`
 width: 40px;
 height: auto;
`
const SharedImage = styled.div`
margin-top: 8px;
width: 100%;
display: block;
position: relative;
color: #f9fafb;
img{
  object-fit: contain;
}
`
const Description = styled.div`
padding: 0 16px;
overflow: hidden;
color: rgba(0,0,0,0.9);
font-size: 14px;
text-align: left;
`
const SocialCounts = styled.ul`
 line-height: 1.3;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 0;
 margin: 0;
 list-style-type: none;
 padding: 8px ;
 border-bottom: 1px solid #e9e5df;
 li{
   height: 16px;
   button{
     border: none;
     background-color: transparent;
     padding: 0;
     cursor: pointer;
     &:hover{
       span{
         color: #0B65C2;
         text-decoration: underline;
       }
     }
     span{
       font-size: 12px;
     color: rgba(0,0,0,0.6);
     margin-left: 4px;
     }
   }
   div{
     display: flex;
     align-items: center;
   }
   a{
     font-size: 12px;
     color: rgba(0,0,0,0.6);
     display: block;
     cursor: pointer;
     &:hover{
       color: #0B65C2;
       text-decoration: underline;
     }
   }
 }
`
const Flex = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
`
const FlexWrapper = styled(Flex)`
  padding: 4px 8px;
  button{
    padding: 10px 8px;
    border: none;
    border-radius: 10px;
    width: 100%;
    height: 48px;
    background-color: transparent;
    img{
      width: 24px;
      height: 24px;
    }
    &:hover{
      background-color: rgba(0,0,0,0.08);
      cursor: pointer;
    }
  }
`