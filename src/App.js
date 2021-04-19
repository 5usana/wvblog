import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreatePost from './components/CreatePost';
import DisplayAllPosts from './components/DisplayAllPosts';
import LandingPage from './components/LandingPage';
import About from './components/About';

function App() {
  return (
    <>
      <Router>
				<Switch>
					<Route exact path='/' render={LandingPage} />
					<Route path='/about' render={About} />
					<Route path='/post' render={CreatePost} />
					<Route exact path='/logs' component={DisplayAllPosts} />
				</Switch>
			</Router>
    </>
  );
}

export default App;
