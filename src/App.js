import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import ArticleList from './pages/ArticleList';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar';
import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<NavBar />
					<div id="page-body">
						<Route path="/" component={Homepage} exact />
						<Route path="/about" component={AboutPage} />
						<Route path="/articles-list" component={ArticleList} />
						<Route path="/article/:name" component={ArticlePage} />
					</div>
				</div>
			</Router>
		);
	}	
}

export default App;
