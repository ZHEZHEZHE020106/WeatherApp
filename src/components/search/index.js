 import {Component, h} from 'preact';
 import style from './style';
 import { Link, Route, Router } from 'preact-router';

export default class Search extends Component{

    constructor(props){
        super(props)
        this.state.searchValue = '';
    }

    handelChange = (e) => {
        e.preventDefault();
        var input = e.target.value

        if(input){
            //The request to API needs city name in a format, first letter should be uppercase and lowercase for the rest
            //These two lines convert the user input into this format whatever they input but should be a valid city name in the end
            input = input.toLowerCase();
            input = input.charAt(0).toUpperCase() + input.slice(1);
            this.setState({
                searchValue : input
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault(); 
    }
    //{&&} means wait the variable get its value and then render the page, otherwise this variable will become undefined
    render(){
        return(
            <div class={style.body}>
                <Router>
                    <Route path='/home/:where?' />
                </Router>         
                <form onSubmit={this.handleSubmit}><input placeholder='Search For City' class={style.search} onInput={this.handelChange}  />{this.state.searchValue && (<Link href={`/home/?where=${this.state.searchValue}`} ><button class={style.submitButton} type='submit'>Search</button></ Link>)}</ form>
            </div>
        )
    }
}






/*
const Search = () =>{

    var searchData = '';

    const geoApi = {
        "async": true,
        "crossDomain": true,
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "fbc76790e2msh2357427d8407747p187262jsn511b8b76b7b2",
            "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com"}
    };

    const loadOptions = (inputValue) => {
        return fetch(
            `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minpopulation=1000000&namePrefix=${inputValue}`,
            geoApi
        )
            .then((response) => response.json())
            .then((response) => {
                return {
                    options : response.date.map((city) => {
                        return {
                            value : `${city.name}`,
                            label : `${city.name}, ${city.countryCode}`
                        }
                    })
                }
            })
    };
    
    const ResponseOnChange = (searchData) => {
        searchData = searchData;
    };

    console.log(searchData)
    return(
        <input placeholder='Search For City' value={searchData} onChange={ResponseOnChange} loadOptions={loadOptions} />
    )

}

export default Search;
*/