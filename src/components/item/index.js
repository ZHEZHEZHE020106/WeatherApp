import {h} from 'preact';
import $ from 'jquery';


const Item = ({data}) => {
    console.log($(data.list))
    return (
        <div>
            {data.list.slice(0,10).map((item,index) => {
                return(
                <div key={index} style={{width:'80px',display:'inline-block'}}>
                    <p style={{'font-size':'0.7em'}}>{new Date(item.dt * 1000).getHours()}:00</p>
                    <img src={'https://openweathermap.org/img/wn/' + `${item.weather[0].icon}` + '@2x.png'} style={{width:'50px',height:'50px'}}/>
                    <p style={{'font-size':'0.7em'}}>{Math.round(item.main.temp - 273.15)}°</p>
                    <p style={{'font-size':'0.5em'}}>{item.weather[0].description}</p>
                </div>
            )})}
            <hr style={{width:'80%'}} />
            <div><div style={{display:'inline',width:'40%',float:'left','margin-left':'25px'}}><label style={{'font-size':'0.7em'}}>Max Temperature: </label><div>{Math.round(data.list[0].main.temp_max - 273.15)}°</div></div></div>  <div style={{display:'inline',width:'40%'}}><div><label style={{'font-size':'0.7em'}}>Min Temperature: </label><div>{Math.round(data.list[0].main.temp_min -273.15)}°</div></div></div>
            <br/>
            <div style={{display:'inline'}}><div><label style={{'font-size':'0.7em'}}>Sunrise:</label><img src="../assets/icons/sunrise.png" style={{width:'50px',height:'50px',float:'left','margin-left':'30%'}} /><p>{new Date(data.city.sunrise * 1000).getHours()}:{new Date(data.city.sunrise * 1000).getMinutes()} am</p></div>
            <div><label style={{'font-size':'0.7em'}}>Sunset:</label><img src="../assets/icons/sunset.png" style={{width:'50px',height:'50px',float:'left','margin-left':'30%'}} /><p>{new Date(data.city.sunset * 1000).getHours()}:{new Date(data.city.sunset * 1000).getMinutes()} pm</p></div></div>
        </div>
    )

}

export default Item;

