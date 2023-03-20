import {h} from 'preact';   
import style from './style';

//display the weather forcast, information in each timeslot is a item
const Item = ({data}) => {
    return (
        <div>
            {data.list.slice(0,10).map((item,index) => {
                return(
                <div key={index} class={style.container}>
                    <p class={style.time}>{new Date(item.dt * 1000).getHours()}:00</p>
                    <img src={'https://openweathermap.org/img/wn/' + `${item.weather[0].icon}` + '@2x.png'} class={style.icon}/>
                    <p class={style.temp}>{Math.round(item.main.temp - 273.15)}°</p>
                    <p class={style.condition}>{item.weather[0].description}</p>
                </div>
            )})}
            <hr class={style.hr}/>
            <div><div class={style.maxminContainer}><label class={style.label}>Max Temperature: </label><div>{Math.round(data.list[0].main.temp_max - 273.15)}°</div></div></div>  <div class={style.minTemp}><div><label class={style.label}>Min Temperature: </label><div>{Math.round(data.list[0].main.temp_min -273.15)}°</div></div></div>
            <br/>
            <div class={style.SunRiseSetContainer}><div><label class={style.label}>Sunrise:</label><img src="../assets/icons/sunrise.png" class={style.sunRiseSetIcon} /><p>{new Date(data.city.sunrise * 1000).getHours()}:{new Date(data.city.sunrise * 1000).getMinutes()} am</p></div>
            <div><label class={style.label}>Sunset:</label><img src="../assets/icons/sunset.png" class={style.sunRiseSetIcon} /><p>{new Date(data.city.sunset * 1000).getHours()}:{new Date(data.city.sunset * 1000).getMinutes()} pm</p></div></div>
        </div>
    )

}

export default Item;

