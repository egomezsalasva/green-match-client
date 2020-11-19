import React from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import Questions from './pages/Questions'
import Shop from './pages/Shop'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const App = () => {  
  return (
    <>
    <Router>
      <Nav />

      <Switch>
        <Route path="/onboarding/question/:id">
          <Questions />
        </Route>
        <Route path="/cbd">
          <Shop />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </Router> 
    </>
  )
}

export default App;
