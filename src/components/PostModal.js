import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { postArticleApi } from '../actions';
import { Timestamp } from 'firebase/firestore'


import closeIcon from '../assets/images/close.svg'
import UserImg from '../assets/images/user.svg'
import shareImg from '../assets/images/share-img.svg'
import shareVideo from '../assets/images/share-video.svg'
import shareDocs from '../assets/images/share-docs.svg'
import shareMercado from '../assets/images/share-mercado.svg'
import shareOccasion from '../assets/images/share-occasion.svg'
import sharePoll from '../assets/images/share-poll.svg'
import shareDots from '../assets/images/ellipse.svg'
import shareComment from '../assets/images/comments.svg'



function PostModal(props) {

  const [editText, setEditText] = useState('')
  const [shareImage, setShareImage] = useState('')
  const [prog, setProg] = useState(0)

  const reset = (e) => {
    setEditText('')
    props.handleClick(e)
  }

  const ImagesClick = (e) => {
    const image = e.target.files[0]

    if (image === '' || image === undefined) {
      alert(`not an image,the file is a ${typeof image}`)
      return;
    }
    setShareImage(image)
  }
  const postShare = (e) => {
    e.preventDefault()
    if (e.target !== e.currentTarget) {
      return;
    }

    const payload = {
      image: shareImage,
      user: props.user,
      description: editText,
      createdAt: Timestamp.fromDate(new Date("December 7, 2021")),
    }
    props.postShare(payload)
    reset(e)
    console.log(payload);
  }
  return (
    <>
      {props.show === "open" && <ModalWrapper show={props.show}>
        <Modal>
          <Header>
            <h2>Create a post</h2>
            <button onClick={e => reset(e)}>
              <img src={closeIcon} alt="close icon" />
            </button>
          </Header>
          <SharedContent>
            <UserInfo>
              {props.user.photoURL ? <img src={props.user.photoURL} alt='user' /> : <img src={UserImg} alt="user img" />}
              <span>{props.user.displayName}</span>
            </UserInfo>
            <Editor>
              <textarea
                value={editText}
                onChange={e => setEditText(e.target.value)}
                placeholder='What do you want to talk about?'
                autoFocus={true}
              />
              <UploadImg>
                {shareImage && <img src={URL.createObjectURL(shareImage)} alt='images' />}
                {prog && <h2>Upload {prog} % </h2>}
              </UploadImg>
            </Editor>
          </SharedContent>
          <ShareCreation>
            <AttachAssets>
              <AssetButton htmlFor='file'>
                <img src={shareImg} alt="share img" />
                <input
                  type="file"
                  onChange={ImagesClick}
                  id='file'
                  name='image'
                  style={{ display: "none" }}
                />
              </AssetButton>
              <AssetButton>
                <img src={shareVideo} alt="share img" />
              </AssetButton>
              <AssetButton>
                <img src={shareDocs} alt="share img" />
              </AssetButton>
              <AssetButton>
                <img src={shareMercado} alt="share img" />
              </AssetButton>
              <AssetButton>
                <img src={shareOccasion} alt="share img" />
              </AssetButton>
              <AssetButton>
                <img src={sharePoll} alt="share img" />
              </AssetButton>
              <AssetButton>
                <img src={shareDots} alt="share img" />
              </AssetButton>
              <AssetButton>
                <img src={shareComment} alt="share img" />
                Anyone
              </AssetButton>
            </AttachAssets>
            <SendPost disabled={!editText ? true : false}
              onClick={e => postShare(e)}
            >Post</SendPost>
          </ShareCreation>
        </Modal>
      </ModalWrapper>}
    </>
  )
}

const ModalWrapper = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 z-index: 9999;
 color: black;
 background-color: rgba(0,0,0,0.8);
`
const Modal = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 545px;
  max-height: 90%;
  position: relative;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
  padding: 15px;
`
const Header = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 border-bottom: 1px solid rgba(0,0,0,0.15);
 color: rgba(0,0,0,0.9);
 h2{
   margin: 0;
   font-weight: 400;
   line-height: 1;
   margin-bottom: 10px;
   margin-left: 10px;
 }
 button{
   border: none;
   background-color: transparent;
   cursor: pointer;
   margin-bottom: 10px;
 }
`
const SharedContent = styled.div`
 display: flex;
 flex-direction: column;
 flex-grow: 1;
 overflow-y: auto;
 background-color: transparent;
 vertical-align: baseline;
 padding: 8px 12px;
`

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  img{
   width: 48px;
   height: 48px;
   background-clip: content-box;
   border-radius: 50%;
   border: 2px solid transparent;
  }
  span{
    font-weight: 600;
    margin-left: 5px;
  }
`
const ShareCreation = styled.div`
 display: flex;
 justify-content: space-between;
 padding:0 12px;
`
const AttachAssets = styled.div`
 display: flex;
 align-items: center;
`
const AssetButton = styled.label`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  padding: 2px 5px;
  img{
    width: 24px;
    height: 24px;
  }
  &:last-child{
    border-left: 1px solid rgba(0,0,0,0.5);
    img{
      margin-right: 5px;
    }
  }
`
const SendPost = styled.button`
 background-color:${(props) => (props.disabled ? "rgba(0,0,0,0.15)" : " #0B65C2")};
 color: #fff;
 min-width: 60px;
 border: none;
 border-radius: 20px;
 padding: 6px 16px;
 font-weight: 600;
 cursor: ${(props) => (props.disabled ? "no-drop" : "pointer")};
 &:hover{
   background-color:${(props) => (props.disabled ? "rgba(0,0,0,0.15)" : " #004182")};
 }
`
const Editor = styled.div`
padding-top: 12px;
padding-bottom: 12px;
 textarea{
   width: 100%;
   min-height: 120px;
   resize: none;
   border: none;
   &:focus{
     outline: none;
   }
 }
`
const UploadImg = styled.div`
  img{
    width: 100%;
  }
`

const mapStateToProps = (state) => {
  return {
    user: state.user.user
  }
}
const mapDispatchToProps = (dispatch) => ({
  postShare: (payload) => dispatch(postArticleApi(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);
