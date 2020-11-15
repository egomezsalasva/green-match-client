import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import dataMatchingImg from '../../imgs/dataMatching02.png'

const Styles = styled.div`
    width: 100%;
    height: 95vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .leftContainer{
        position: absolute;
        top: 0;
        left: 0;
        width: 50vw;
        height: 100%;
        background: #2C2490;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 0 0 20px;

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

    .rightPhoto{
        position: absolute;
        top: 0;
        right: 0;
        width: 50vw;
        height: 100%;
        background: url(${dataMatchingImg});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: bottom;
    }
`

const DataMatching = () => {
  return (
    <Styles>
        <div className="rightPhoto"></div>
        <div className="leftContainer">
            <div className="contentContainer">
                <h2>Powered by Taste Data</h2>
                <div className="text">Data powers Green Match’s one-of-a-kind CBD matching. Our CBD experts taste every single CBD flower, analizing and collecting over 10 different attributes. <br/> The result is the best, most personalized tasting experience that enables you to discover new CBD Flowers and CBD brands.</div>
                <Link to="/onboarding/question/1" className="buttonSecondary">Get Your CBD</Link>
            </div>
        </div>
    </Styles>
  )
}
export default DataMatching
