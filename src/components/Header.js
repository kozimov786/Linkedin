import React from 'react';
import styled from 'styled-components';
import MainLogo from '../assets/images/home-logo.svg'
import SearchImg from '../assets/images/search-icon.svg'


export default function Header() {
  return (
    <Head>
      <Content>
        <Logo>
          <a href="/">
            <img src={MainLogo} alt="linkedin logo" />
          </a>
        </Logo>
        <Search>
          <input type="text" placeholder='Search' />
          <SearchIcon>
            <img src={SearchImg} alt="search icon" />
          </SearchIcon>
        </Search>
      </Content>
    </Head>
  )
}

const Head = styled.header`
 background-color: #fff;
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 padding-top: 2px;
 padding-bottom: 2px;
 border-bottom: 1px solid rgba(0,0,0,0.08);
`

const Content = styled.div`
 max-width: 1128px;
 margin: 0 auto;
 padding-left: 20px;
 padding-right: 20px;
 display: flex;
 align-items: center;
`

const Logo = styled.div`
margin-right: 8px;
 img{
   display: block;
 }
`

const Search = styled.div`
 display: flex;
 width: 280px;
 flex-direction: row-reverse;
 align-items: center;
 height: 34px;
 background-color: #eef3f8;
 border-radius: 4px;
 padding:4px;
 input{
   border: none;
   padding: 4px;
   width: 100%;
   background-color: transparent;
   &:focus{
     outline: none;
   }
 }
`

const SearchIcon = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  img{
    display: block;
  }
`
