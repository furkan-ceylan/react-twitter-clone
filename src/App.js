import './styles/App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Status from './pages/Status'
import Sidebar from './components/Sidebar'
import RightSidebar from './components/RightSidebar'

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="side-nav">
          <Sidebar />
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/status/:id" component={Status} />
          </Switch>
        </div>
        <div className="right-side">
          <RightSidebar />
        </div>
      </div>
    </Router>
  )
}

export default App
