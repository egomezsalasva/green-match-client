import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom"
import {QuestionsContext} from '../contexts/QuestionsContext'
// import coffeePlaceholder from '../imgs/quest1.png'


const QuestionsContainer = styled.div`
    position: relative;
    margin-top: 60px;
    padding: 0 24px;
    color: #1D7260;

    .contentWrapper{
        max-width: 1160px;
        margin: 0 auto;
        position: relative;
        padding: 0 24px;

        .quizHeader{
            margin-top: 17px;
            padding: 0 12px;

            span{
                font-size: 18px;
                line-height: 1.3333;
            }
        }

        .quizQuestion{
            margin-top: 1px;
            margin-bottom: 74px;
            font-size: 60px;
            padding: 0 12px;

            .quizText{
                max-width: 560px;
                line-height: 1.0667;
            }

            .questionImageWrapper{
                img{
                    z-index: 1;
                    position: absolute;
                    top: -30px;
                    right: -90px;
                    width: 340px;
                    vertical-align: middle;
                }
            }
        }

        .quizAnswers{
            position: relative;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 0 12px;

            .answerButton{
                opacity: 1;
                width: 49%;
                align-items: center;
                background-color: #F5F5F3;
                border-radius: 2px;
                border: 1px solid #1D7260;
                cursor: pointer;
                display: flex;
                justify-content: space-between;
                margin: 0 0 12px;
                padding: 30px 35px 30px 18px;
                transition: all ease-in-out .5s;

                .answerText{
                    display: flex;
                    align-items: center;

                    .answerButtonHeader{
                        font-size: 20px;
                        margin-bottom: 8px;
                    }
                    .answerButtonSubtitle{
                        font-size: 18px;
                        line-height: 1.2;
                    }
                }
                .answerButtonCheckmarkWrapper{
                    background-color: #F5F5F3;
                    border-radius: 50%;
                    flex: 0 0 28px;
                    height: 28px;
                    width: 28px;
                    transition: background-color ease-in-out .3s;
                    margin-left: 32px;
                }
            }
        }

        .quizEducation{
            margin-top: 84px;
            margin-bottom: 240px;
            padding: 0 12px;

            .row{
                margin-left: -24px;
                margin-right: -24px;
                padding: 0 12px;

                .halfWidth{
                    width: 50%;

                    .educationHeader{
                        margin-bottom: 16px;
                        font-size: 24px;
                        line-height: 1.1667;
                    }
                    .educationCopy{
                        font-size: 18px;
                        line-height: 1.3333;
                    }
                }
            }
        }
    }
`

const Questions = () => {

    const questionsData = useContext(QuestionsContext)
    let [pageNum, setPageNum] = useState(1)
    let [dataIndex, setDataIndex] = useState(0)

    const history = useHistory()
    const onClickHandler = (answerId) => {
        if( pageNum < questionsData.length){ setPageNum(++pageNum) }
        if( dataIndex < questionsData.length - 1){ setDataIndex(++dataIndex) }
        history.push(`/onboarding/question/${pageNum}`)
        console.log(answerId)
    }

  return (
    <QuestionsContainer>
        <div className="contentWrapper">
            <div className="quizHeader">
                <span>{`${pageNum} of 7`}</span>
            </div>
            <div className="quizQuestion">
                <div className="quizText">{questionsData[dataIndex].text}</div>
                <div className="questionImageWrapper">
                    {/* <img src={coffeePlaceholder} alt="coffee cup" /> */}
                </div>
            </div>
            <div className="quizAnswers">
                {questionsData[dataIndex].answers.map( answer => {
                    return(
                        <div className="answerButton" onClick={() => onClickHandler(answer.id)} key={answer.id}>
                            <div className="answerText">
                                <div>
                                    <div className="answerButtonHeader">{answer.text}</div>
                                    <div className="answerButtonSubtitle">{answer.help_text}</div>
                                </div>
                            </div>
                            <div className="answerButtonCheckmarkWrapper" />
                        </div>
                    )
                })}
            </div>
            <div className="quizEducation">
                <div className="row">
                    <div className="halfWidth">
                        <div className="educationHeader">{questionsData[dataIndex].educational_content[0].title}</div>
                        <div className="educationCopy">{questionsData[dataIndex].educational_content[0].text}</div>
                    </div>
                </div>
            </div>
        </div>
    </QuestionsContainer>
  )
}
export default Questions
