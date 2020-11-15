import React from 'react'
import styled from 'styled-components'
import logo from '../imgs/logo.png'
import { Link } from 'react-router-dom'
import loginIcon from '../imgs/loginIcon.png'
import cartIcon from '../imgs/cartIcon.png'

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    background: #F5F5F3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;

    .logoContainer{
      position: relative;
      height: 70px;

      .logo{
        position: absolute;
        top: 18px;
        height: 34px;
      }

      .logoText{
        text-transform: uppercase;
        font-family: 'RightGrotesk-CompactBlack';
        font-size: 28px;
        color: #1D7260;
        line-height: 67px;
        padding-left: 45px;
      }
    }

    .navContainer{
      a{
        font-size: 18px;
        padding: 0 20px;
        text-decoration: none;
        color: #1D7260;
      }
    }

    .loginsContainer{
      display: flex;
      align-items: center;

      .navButton{
        display: inline-block;
        width: 120px;
        height: 35px;
        border-radius: 4px;
        border: 1.5px solid #2C2490;
        text-align: center;
        text-transform: uppercase;
        line-height: 32px;
        text-decoration: none;
        color: #2C2490;
        font-size: 14px;
      }

      .loginIcon{
        width: 26px;
        margin: 0 20px;
        transform: translateY(2px);
      }

      .cartIcon{
        width: 26px;
        transform: translateY(2px);
      }

    }
    
`

const Nav = () => {
  return (
    <NavContainer>

      <div className="logoContainer">
        <img src={logo} alt="logo" className="logo" />
        <div className="logoText">Green Match</div>
      </div>

      <div className="navContainer">
        <Link to="/subscribe">Subscribe</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/learn">Learn</Link>
        <Link to="/legal-info">Legal Info</Link>
        <Link to="/growers">Growers</Link>
        <Link to="/about">About</Link>
      </div>

      <div className="loginsContainer">
        <Link to="/questions" className="navButton">Get Matched</Link>
        <Link to="/login"><img className="loginIcon" src={loginIcon} alt="login" /></Link>
        <Link to="/cart"><img className="cartIcon" src={cartIcon} alt="cart" /></Link>
      </div>
      
    </NavContainer>
  )
}
export default Nav
