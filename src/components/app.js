// import preact
import { h, render, Component } from 'preact';
// import stylesheets
import style from './home/style';
import {Router} from 'preact-router';


import More from './more';
import Header from './header';
import Home from './home';


export default class App extends Component {


	render() {
		return (
			<div class={ style.container }>
				<Header/>
				<Router>
					<Home path="/home" />
					<More path="/more" />
				</Router>
				
			</div>
		);
	}

}