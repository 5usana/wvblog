import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import DisplayAllPosts from './blog/DisplayAllPosts';
import LandingPage from './components/LandingPage';
import About from './components/About';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const GlobalStyle = createGlobalStyle`
body {
	margin: 0;
	font-family: 'New Tegomin', serif;
	box-sizing: border-box;
	
}
`;

function App() {
  return (
    <>
      <Router>
		  	<GlobalStyle />
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
