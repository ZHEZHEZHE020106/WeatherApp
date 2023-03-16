import {h, Component } from "preact";
import { Link } from "preact-router";


export default class Header extends Component{
    render(){
        return(
            <div>
                <Link href='/home'><img src='../assets/icons/house-solid.png' style={{width:'20px',height:'20px','margin-top':'5px','margin-left':'5px',float:'left'}} ></img></Link>
                <input type="text"></input>
            </div>
        )
    }
}