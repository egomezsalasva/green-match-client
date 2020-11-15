import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

import texture from '../../imgs/texture.png'

const HeroContainer = styled.div`
    width: 100vw;
    height: calc(100vh - 70px);
    background: #1D7260;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .textureOverflow{
      position: absolute;
      width: 100vw;
      height: 100%;
      overflow: hidden;
      top: 0;
      left: 0;

      .texture{
        width: 100vw;
        height: calc(100vh - 70px);
        background: url(${texture});
        background-size: cover;
        background-repeat: no-repeat;
        
        opacity: 0.5;
      }
      .texture02{
        position: absolute;
        top: 0;
        left: 100vw;
      }
      .texture03{
        position: absolute;
        top: 0;
        left: 200vw;
      }
    }
    
    .heroContent{
      position: relative;
      z-index: 10;
      top: -5px;
      max-width: 650px;
  
      h1{
        max-width: 650px;
        font-size: 84px;
        line-height: 1;
        color: #F5F5F3;
        text-align: center;
        margin-bottom: 40px;
        font-weight: normal;
      }

      p{
        max-width: 450px;
        font-size: 24px;
        line-height: 1.4;
        color: #F5F5F3;
        text-align: center;
        margin: 0 auto 30px;
      }

      .buttonPrimary{
        width: 160px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        background-color: #2C2490;
        color: #F5F5F3;
        text-transform: uppercase;
        font-size: 15px;
        line-height: 44px;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        text-decoration: none;
        margin: 0 auto;
        box-shadow: 0 0 8px 4px rgba(0,0,0,0.05);
      }
    }

`

const Hero = () => {

  let textureRef = useRef()
  let texture02Ref = useRef()
  let texture03Ref = useRef()
  useEffect(() => {
    let time = 60
    gsap.to(textureRef, { duration: time, xPercent: -100, ease: "none"})
    gsap.to(texture02Ref, { duration: time, xPercent: -100, ease: "none"})
    gsap.to(texture03Ref, { duration: time, xPercent: -100, ease: "none"})
  }, [])

  return (
    <HeroContainer>

      <div className="heroContent">   
        <h1>Discover The Best CBD For You</h1>
        <p>Find a personalized selection of CBD Flowers from top growers worldwide</p>
        <Link to="/onboarding/question/1" className="buttonPrimary">Take The Quiz</Link>
      </div>

      <div className="textureOverflow">
        <div className="texture" ref={el => textureRef = el}/>
        <div className="texture texture02" ref={el => texture02Ref = el}/>
        <div className="texture texture03" ref={el => texture03Ref = el}/>
      </div>

    </HeroContainer>
  )
}
export default Hero
