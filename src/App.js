import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import DriftPage from './components/Pages/DriftPage/DriftPage';
import ForzaPage from './components/Pages/ForzaPage/ForzaPage';
import HomePage from './components/Pages/HomePage/HomePage';
import TimeAttackPage from './components/Pages/TimeAttackPage/TimeAttackPage';
import './css/index.css';

const App = () => {
	return (
		<Router>
			<Menu />
			<div className="page">
				<Switch>
					<Route path="/timeattack" component={ ForzaPage } ></Route>
					<Route path="/drift" component={ DriftPage } ></Route>
					<Route path="/forza" component={ TimeAttackPage } ></Route>
					<Route path="/" component={ HomePage } ></Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
