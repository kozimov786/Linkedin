import React, { useState } from 'react';
import styled from 'styled-components';
import Share from './Share';
import Posts from './Posts';
import PostModal from './PostModal';




export default function MainContent(props) {
  const [show, setShow] = useState('close')

  const handleClick = (e) => {
    e.preventDefault()


    switch (show) {
      case 'open':
        setShow('close')
        break;
      case 'close':
        setShow('open')
        break;
      default:
        setShow('close')
        break;
    }
  }

  return (
    <Content>
      <Share show={show} setShow={setShow} handleClick={handleClick} />
      <Loader>
        {props.loading && <span>Uploading</span>}
      </Loader>
      <Posts />
      <PostModal show={show} setShow={setShow} handleClick={handleClick} />
    </Content>
  )
}
const Content = styled.div`
 width: 100%;
 max-width: 540px;
`
const Loader = styled.div`
 text-align: center;
 img{
   width: 30px;
 }
`