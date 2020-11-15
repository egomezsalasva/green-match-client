import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import phoneImg from '../../imgs/phone.png'

const Styles = styled.div`
    padding-bottom: 150px;
    background: #1D7260;
    
    .howItWorksContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        color: #F5F5F3;

        h2{
            padding: 80px 0;
            font-size: 64px;
            font-weight: normal;
        }

        .stepsContainer{
            padding: 0 20px;
            margin-top: 0;
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin: 0 auto;

            .step{
                height: 600px;
                flex: 1;
                border-left: 1px solid #FFB24B;
                &:first-of-type{
                border-left: 0px solid #FFB24B;
                }

                .stepInner{
                    padding: 0;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    height: 100%;
                    justify-content: flex-end;

                    .imageWrapper{
                        background-color: #F5B1BC;
                        border-radius: 50%;
                        height: 310px;
                        margin: 0 auto;
                        min-height: 310px;
                        min-width: 310px;
                        width: 310px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        position: relative;

                        img{
                            position: relative;
                            width: 100%;
                            transform: scale(0.5);
                            vertical-align: middle;
                        }
                    }

                    .textWrapper{
                        margin-top: 36px;
                        padding: 30px 0 60px;
                        max-width: 295px;

                        .stepNumber{
                            margin-top: 32px;
                            color: #FFB24B;
                            font-size: 20px;
                            text-transform: uppercase;
                            line-height: 1.1667;
                        }

                        h3{
                            margin-top: 6px;
                            font-size: 32px;
                            font-weight: normal;
                            line-height: 1.125;
                        }

                        .text{
                            max-width: 241px;
                            font-size: 18px;
                            line-height: 1.33;
                            margin: 20px auto 0;
                        }
                    }
                }
            }
        }


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
        margin-top: 50px;
      }
`

const HowItWorks = () => {
  return (
    <Styles>
        <div className="howItWorksContainer">
          <h2>How It Works</h2>
          <div className="stepsContainer">
            <div className="step">
                <div className="stepInner">
                    <div className="imageWrapper">
                        <img src={phoneImg} alt="phone" />
                    </div>
                    <div className="textWrapper">
                        <div className="stepNumber">Step 1</div>
                        <h3>Get Matched</h3>
                        <div className="text">Take the quiz and tell us how you like your CBD. We’ll curate matches just for you.</div>
                    </div>
                </div>
            </div>
            <div className="step">
                <div className="stepInner">
                    <div className="imageWrapper">
                        <img src={phoneImg} alt="" />
                    </div>
                    <div className="textWrapper">
                        <div className="stepNumber">Step 2</div>
                        <h3>Make It Your Own</h3>
                        <div className="text">Customize your order frequency, grind settings, and even choose your own CBD’s. </div>
                    </div>
                </div>
            </div>
            <div className="step">
                <div className="stepInner">
                    <div className="imageWrapper">
                        <img src={phoneImg} alt="" />
                    </div>
                    <div className="textWrapper">
                        <div className="stepNumber">Step 3</div>
                        <h3>Receive & Discover</h3>
                        <div className="text">Enjoy CBD at peak freshness and experience a new coffee and roaster every time.</div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <Link className="buttonPrimary" to="/onboarding/question/1" >Get Started</Link> 
    </Styles>
  )
}
export default HowItWorks
