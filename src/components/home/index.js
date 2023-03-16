// import preact
import { h, render,props, Component } from 'preact';
// import stylesheets
import style from './style';
// import jquery for API calls
import $ from 'jquery';
import {Router, Link, Route} from 'preact-router';
import More from '../more';

export default class Home extends Component {


	// a constructor with initial set states
	constructor(props){
		super(props);
		// temperature state
		this.state.temp = "";
		this.state.icon = "";
		this.fetchWeatherData();
		
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
	}

	


	
	render() {
		// check if temperature data is fetched, if so add the sign styling to the page
		const tempStyles = this.state.temp ? `${style.temperature} ${style.filled}` : style.temperature;
		const icon = this.state.icon;
		const locate = this.state.locate;
		
		// display all weather data
		return (
			<div class={ style.body}>
				<div class={ style.city }>{ this.state.locate }</div>
				<hr class={style.hr}/> 
				<div class={style.date}><this.getDay/>&emsp;<this.getDate/> <this.getMonth/></div>
				<div class={style.imgcontainer}><img class = {style.img} src = {"https://openweathermap.org/img/wn/" + this.state.icon + "@2x.png"} /><span class={ tempStyles }>{ Math.round(this.state.temp) }</span></div>
			    <div><div class={ style.feel }>Feels Like {Math.round(this.state.feel)}°</div><div class={ style.conditions }>{ this.state.cond } </div></div>
				<hr class={style.hr}/>
				<div class={style.iconsContainer}><img class={style.Windicon} src='../assets/icons/Wind-icon.png' /><img class={style.Humidityicon} src='../assets/icons/Humidity-icon.png' /><img class={style.Visibilityicon} src='../assets/icons/Visibility-icon.png' /></div>
				<div class={style.dataContainer}><span class={style.Winddate}>{this.state.wind}m/s</span><span class={style.Humiditydate}>{this.state.humidity}%</span><span class={style.Visibilitydate}>{this.state.visibility}m</span></div>
				<hr class={style.hr}/>
				<Router>
					<Route path="/more/:where?" />
				</Router>
				<Link class={style.Link} href={`/more/?where=${locate}`} Now={this.state}>More</Link>

				
			</div>
		);
	}

	parseResponse = (parsed_json) => {
		
		var location = parsed_json['name'];
		var temp_c = parsed_json['main']['temp'];
		var conditions = parsed_json['weather']['0']['description'];
		var icon = parsed_json['weather']['0']['icon'];
		var wind = parsed_json['wind']['speed'];
		var humidity = parsed_json['main']['humidity'];
		var visibility = parsed_json['visibility'];
		var feel = parsed_json['main']['feels_like'];

		// set states for fields so they could be rendered later on
		this.setState({
			locate: location,
			temp: temp_c,
			cond : conditions,
			icon : icon,
			wind : wind,
			humidity : humidity,
			visibility : visibility,
			feel: feel
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
}
