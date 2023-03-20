import {h, Component } from "preact";
import { Link } from "preact-router";
import style from './style';

export default class Header extends Component{
    render(){
        return(
            <div>
                <Link href='/search'><img src='../assets/icons/search.png' class={style.searchImg}></img></Link>
            </div>
        )
    }
}