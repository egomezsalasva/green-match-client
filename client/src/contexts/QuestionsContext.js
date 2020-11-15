import React, { Component, createContext } from 'react'
import quizQuestionsData from '../data/quizQuestionsData'


const QuestionsContext = createContext()

export default class QuestionsProvider extends Component {
    state = { }
    render() {
        return (
            <QuestionsContext.Provider value={quizQuestionsData}>
                {this.props.children}
            </QuestionsContext.Provider>
        )
    }
}
const QuestionsConsumer = QuestionsContext.Consumer

export { QuestionsProvider, QuestionsConsumer, QuestionsContext}