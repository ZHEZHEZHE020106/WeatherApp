// import preact
import { h, render, Component } from 'preact';
// import stylesheets for ipad & button
import style from './style';
import style_iphone from '../button/style_iphone';
// import jquery for API calls
import $ from 'jquery';
// import the Button component
import Button from '../button';

export default class Iphone extends Component {
//var Iphone = React.createClass({

	// a constructor with initial set states
	constructor(props){
		super(props);
		// temperature state
		this.state.temp = "";
		this.state.icon = "";
		// button display state
		//this.setState({ display: true });
		this.fetchWeatherData();
		this.parseResponse
	}

	// a call to fetch weather data via wunderground
	fetchWeatherData = () => {
		// API URL with a structure of : ttp://api.wunderground.com/api/key/feature/q/country-code/city.json
		var url = "http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=922c5f25670143d722124085ed780adb";
		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponse,
			error : function(req, err){ console.log('API call failed ' + err); }
		})
		// once the data grabbed, hide the button
		//this.setState({ display: false });
	}

	// the main render method for the iphone component
	render() {
		// check if temperature data is fetched, if so add the sign styling to the page
		const tempStyles = this.state.temp ? `${style.temperature} ${style.filled}` : style.temperature;
		const icon = this.state.icon;
		// display all weather data
		return (
			
			<div class={ style.container } onload={this.fetchWeatherData}>
				<div class={ style.header }>
					<div class={ style.city }>{ this.state.locate }</div>
					<hr class={style.hr}/>
					<div><this.getDay/>&emsp;<this.getDate/> <this.getMonth/></div>
					<div class={style.imgcontainer}><img class = {style.img} src = {"https://openweathermap.org/img/wn/" + `${this.state.icon}` + "@2x.png"} /><span class={ tempStyles }>{ Math.round(this.state.temp) }</span></div>
					<div class={ style.conditions }>{ this.state.cond }</div>
				</div>
				<div class={ style.details }></div>
				
			</div>
		);
	}

	parseResponse = (parsed_json) => {
		var location = parsed_json['name'];
		var temp_c = parsed_json['main']['temp'];
		var conditions = parsed_json['weather']['0']['description'];
		var icon = parsed_json['weather']['0']['icon'];

		// set states for fields so they could be rendered later on
		this.setState({
			locate: location,
			temp: temp_c,
			cond : conditions,
			icon : icon
		});
	}

	getDay(){
		const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
		const d = new Date();
		let day = weekday[d.getDay()];
		return day;
	}

	getDate(){
		const t = new Date();
		let date = t.getDate();
		return date.toString();
	}

	getMonth(){
		const Month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
		const d = new Date();
		let month = Month[d.getUTCMonth()];
		return month;
	}

	getIcon(){
		var url = "./assets/icons/09d.png"
		return url
	}
}
