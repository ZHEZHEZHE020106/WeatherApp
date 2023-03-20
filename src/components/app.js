// import preact
import { h, render, Component } from 'preact';
// import stylesheets
import style from './home/style';
import {Router} from 'preact-router';



import More from './more';
import Header from './header';
import Home from './home';
import Search from './search';

export default class App extends Component {


	//the user should search for a city first
	render() {
		return (
			<div class={ style.container }>
				
				<Header/>
				
				<Router>
					<Search path ="/" />
					<Search path ='/search' />
					<Home path="/home" />
					<More path="/more" />
				</Router>
				
			</div>
		);
	}

}