import React from 'react'
import './styles/App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="side-nav">
          <Sidebar />
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/tweet/:id" component={Tweet} /> */}
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
