import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import personalizedComposition from '../../imgs/personalized.png'


const Styles = styled.div`
  background-image: url(${personalizedComposition});
  align-items: end;
  padding-top: 80px;
  background-color: #F5F5F3;
  display: flex;
  /* background-size: 70%; */
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 100% bottom;
  margin: 0;
  height: 560px;
  color: #1D7260;

  .personalizedWrapper{
    margin: 0;
    flex-direction: row;

    .personalizedLeft{
      padding-left: 130px;
      /* padding-top: 0; */
      padding-top: 10px;
      display: flex;
      flex-direction: column;
      align-items: end;
      z-index: 1;

      h2{
        margin: 0;
        max-width: 493px;
        font-size: 55px;
        line-height: 1;
        font-weight: normal;
        margin-bottom: 40px;
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
        box-shadow: 0 0 8px 4px rgba(0,0,0,0.05);
      }
    }
  }
`

const PersonalizedSubscription = () => {
  return (
    <Styles>
        <div className="personalizedWrapper">
          <div className="personalizedLeft">
            <h2>Design Your Personalized CBD Subscription</h2>
            <Link to="/onboarding/question/1" className="buttonPrimary">Get Your CBD</Link>
          </div>
        </div>
    </Styles>
  )
}
export default PersonalizedSubscription
