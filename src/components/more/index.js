import { h,render,Component } from "preact";
import {Router, Link, Route} from 'preact-router';
import $ from 'jquery';
import Item from '../item';
import style from './style';

export default class More extends Component{

    constructor(props){
        super(props)
        this.fetchWeatherForcast();
        
    }

    //fetch the information for weather forcast, the one in 'home' is current weather
    fetchWeatherForcast= () =>{
        //url to get weather data: http://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
        //url for API instructions: https://openweathermap.org/forecast5
        var url = "http://api.openweathermap.org/data/2.5/forecast?q=" + this.props.where + "&appid=922c5f25670143d722124085ed780adb";
		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponse,
			error : function(req, err){ console.log('API call failed ' + err); }
		})
    }

    parseResponse = (parsed_json) => {
        var forcastData = parsed_json;
        
	
		this.setState({
			locate : this.props.where,
			fdata : forcastData
		});
	}


    render(){ 
        const location = this.props.where
        return(
            <div class={style.body}>
                <Router>
                    <Route path='/home/:where?' />
                </Router>
                <Link href={`/home/?where=${location}`}><img src='../assets/icons/house-solid.png' class={style.houseImg}></img></Link>
                <p class={style.cityName}>{location}</p>
                <label>Weather Forcast(every 3h)</label>
                {this.state.fdata && <Item data={this.state.fdata}/>}
            </div>   
        )
    }
}