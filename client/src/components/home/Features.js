import React from 'react'
import styled from 'styled-components'
import farmIcon from '../../imgs/farmIcon.svg'
import selectionIcon from '../../imgs/selectionIcon.svg'
import leafIcon from '../../imgs/leafIcon.svg'

const Styles = styled.div`
    width: 100%;
    /* height: 470px; */
    height: 500px;
    background: #F5F5F3;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .featuresContainer{
      display: flex;
      align-items: stretch;
      flex-direction: row;
      max-width: 1440px;
      text-align: center;
      width: 100%;
      padding: 50px 0;

      .feature{
        display: flex;
        align-items: center;
        flex-direction: column;
        flex: 1;
        font-size: 24px;
        justify-content: space-between;
        padding: 30px 0;
        line-height: 1;
        color: #2C2490;
        border-left: 1px solid #FFB24B;
        &:first-of-type{
          border-left: 0px solid #FFB24B;
        }

        .img{
          height: 48px;
        }

        h3{
          margin-top: 25px;
          margin-bottom: 15px;
          font-weight: normal;
          text-transform: capitalize;
        }

        .text{
          font-size: 18px;
          line-height: 1.333;
          width: 300px;
        }
      }
    }
`

const Features = () => {
  return (
    <Styles>
        <div className="featuresContainer">
          <div className="feature">
            <img src={farmIcon} alt="Farm Icon" />
            <h3>Curated <br/> Selection</h3>
            <div className="text">100+ CBD Flowers from the best farm growers, all tasted by our team</div>
          </div>
          <div className="feature">
            <img src={selectionIcon} alt="Selection Icon" />
            <h3>Tailored <br/> To You</h3>
            <div className="text">Our quiz matches you to CBD based on your preferences.</div>
          </div>
          <div className="feature">
            <img src={leafIcon} alt="Leaf Icon" />
            <h3>Comfort <br/> & Privacy</h3>
            <div className="text">Packed and delivered to your doorstep always keeping your privacy intact.</div>
          </div>
        </div>
    </Styles>
  )
}
export default Features
