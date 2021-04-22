import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import CreatePost from './components/CreatePost';
import DisplayAllPosts from './blog/DisplayAllPosts';
import LandingPage from './components/LandingPage';
import About from './components/About';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <>
      <Router>
			<Switch>
				<Route exact path='/' render={LandingPage} />
				<Route path='/about' component={About} />

				{/* DisplayAllPosts = parent to Post, CreatePost, & ModifyPost, not sure how to route these correctly */}
				<Route path='/blog' component={DisplayAllPosts} />
				{/* <Route path='/post' render={CreatePost} /> */}
				<Route path='/signin' component={SignIn} />
				<Route path='/signup' component={SignUp} />
			</Switch>
		</Router>
    </>
  );
}

export default App;
