import React from 'react';
import styled from 'styled-components';


import WidgetImg from '../assets/images/widget-icon.svg'
import itemIcon from '../assets/images/item-icon.svg';
import UserImg from '../assets/images/user.svg'
import AddPhoto from '../assets/images/photo.svg'
import plusIcon from '../assets/images/plus-icon.svg'
import { connect } from 'react-redux';



function Profile(props) {
  return (
    <Sidebar>
      <ArtCard>
        <UserInfo>
          <CardBackground>
            <a>
              <Photo />
              <Link>Welcome,{props.user ? props.user.displayName : 'there'}</Link>
            </a>
            <a>
              <AddPhotoText>Add a photo</AddPhotoText>
            </a>
          </CardBackground>
        </UserInfo>
        <Widget>
          <a>
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <img src={WidgetImg} alt="widget icon" />
          </a>
        </Widget>
        <Item>
          <span>
            <img src={itemIcon} alt="" />
            My Items
          </span>
        </Item>
      </ArtCard>

      <CommunityCard>
        <ul>
          <li>
            <a>
              Groups
            </a>
          </li>
          <li>
            <a>
              Events
            </a>
            <img src={plusIcon} alt="plus icon" />
          </li>
          <li>
            <a>
              Followed Hashtags
            </a>
          </li>
          <li>
            <a>
              Discover more
            </a>
          </li>
        </ul>
      </CommunityCard>
    </Sidebar>
  )
}

const Sidebar = styled.div`
  width: 100%;
  max-width: 225px;
`

const ArtCard = styled.div`
  width: 100%;
 max-width: 315px;
 background-color: #fff;
 border-radius: 10px;
 border:none;
 overflow: hidden;
 box-shadow: 0 0 0 1px rgb(0 0 0 / 15%),0 0 0 rgb(0 0 0 / 20%);
`
const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0,0,0,0.15);
  padding: 12px 12px 16px;
  height: 168px;
`

const CardBackground = styled.div`
 background-image: url(${UserImg});
 background-position: center;
 background-size: 462px;
 height: 54px;
 margin: -12px -12px 0;
 text-align: center;
`

const Photo = styled.div`
 background-image: url(${AddPhoto});
 box-shadow: none;
 background-position: center;
 box-sizing: border-box;
 background-clip: content-box;
 height: 72px;
 width: 72px;
 background-color: #fff;
 transform: translate(100%,30%);
 background-size: 60%;
 margin-bottom: 20px;
 background-repeat: no-repeat;
 border: 2px solid #fff;
 border-radius: 50%;
`

const Link = styled.div`
  color: rgba(0,0,0,0.9);
  font-weight: 600;
`

const AddPhotoText = styled.div`
  color: #0a66c2;
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
`


const Widget = styled.div`
  border-bottom: 1px solid rgba(0,0,0,0.15);
  padding-top: 12px;
  padding-bottom: 12px;
  & > a{
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 4px 12px;
  }
  &:hover{
    background-color: rgba(0,0,0,0.08);
  }
  img{
    width: 16px;
    height: 16px;
  }
  div{
    display: flex;
    flex-direction: column;
    text-align: left;
    span{
      font-size: 12px;
      line-height: 1.33;
      &:first-child{
        color: rgba(0,0,0,0.6);
      }
      &:nth-child(2){
        color: rgba(0,0,0,1);
      }
    }
  }
`

const Item = styled.a`
 padding: 12px;
 text-align: left;
 display: block;
 font-size: 12px;
  span{
    display: flex;
    align-items: center;
  }
  img{
    width: 16px;
    height: 16px;
    margin-right: 10px;
  }
  &:hover{
    background-color: rgba(0,0,0,0.08);
  }
`

const CommunityCard = styled(ArtCard)`
  margin-top: 10px;
  padding-top: 4px;
  ul{
    padding: 0;
    margin: 0;
    list-style-type: none;

    li{
      display: flex;
      align-items: center;
      padding: 4px 12px;
      justify-content: space-between;
      img{
        width: 16px;
        height: 16px;
      }
      a{
        color: #0a66c2;
        cursor: pointer;
        font-size: 12px;
        &:hover{
          text-decoration: underline;
        }
      }
      &:last-child{
        border-top: 1px solid #d6cec2;
        padding: 12px;
        justify-content: center;
        a{
          color: rgba(0,0,0,0.6);
          font-size: 14px;
        }
        &:hover{
          background-color: rgba(0,0,0,0.08);
          a{
            text-decoration: none;
          }
        }
      }
    }
  }

`

const mapStateToProps = (state) => {
  return {
    user: state.user.user
  }
}

export default connect(mapStateToProps)(Profile)