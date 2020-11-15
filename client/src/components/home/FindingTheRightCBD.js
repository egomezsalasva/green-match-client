import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import findingTheRightCBDImg from '../../imgs/findingTheRightCBD02.png'

const Styles = styled.div`
    width: 100%;
    height: 95vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .leftPhoto{
        position: absolute;
        top: 0;
        left: 0;
        width: 50vw;
        height: 100%;
        background: url(${findingTheRightCBDImg});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: bottom;
    }

    .rightContainer{
        position: absolute;
        top: 0;
        right: 0;
        width: 50vw;
        height: 100%;
        background: #2C2490;
        display: flex;
        align-items: center;
        justify-content: center;

        .contentContainer{
            max-width: 450px;

            h2{
                font-size: 55px;
                line-height: 1;
                color: #F5B1BC;
                font-weight: normal;
                margin: 0 auto;
                margin-bottom: 30px;
            }

            .text{
                font-size: 22px;
                line-height: 1.5;
                color: #F5F5F3;
                margin-bottom: 40px;
            }

            .buttonSecondary{
                width: 160px;
                height: 44px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 4px;
                background-color: #F5B1BC;
                color: #2C2490;
                text-transform: uppercase;
                font-size: 15px;
                line-height: 44px;
                text-align: center;
                white-space: nowrap;
                vertical-align: middle;
                text-decoration: none;
                box-shadow: 0 0 8px 4px rgba(0,0,0,0.05);
            }
        }
    }
`

const FindingTheRightCBD = () => {
  return (
    <Styles>
        <div className="leftPhoto"></div>
        <div className="rightContainer">
            <div className="contentContainer">
                <h2>We Believe Better CBD Makes a Difference</h2>
                <div className="text">Finding just the right CBD is hard. So, we re-thought the model for home. We connect you to CBD from top growers across the globe so you can explore, combining our knowledge, data innovation, and values to create a more personal, impactful experience on every level.</div>
                <Link to="/onboarding/question/1" className="buttonSecondary">Get Started</Link>
            </div>
        </div>
    </Styles>
  )
}
export default FindingTheRightCBD
