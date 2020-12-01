import React, {useState} from 'react';

import '../styles/search-weather.css'


const APP_ID = "f1b8fe659c4596fdcdb52b02218fd116"


function SearchWeather() {
    const [searchQuery, setSearchQuery] = useState("")

    const search = (e) => {
        e.preventDefault()
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${APP_ID}`
        console.log(searchQuery)
    }

    return (
        <div className="container">
            <div className="content">
                <div className="left">
                    <form onSubmit={search}>
                        <input value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)} placeholder="Enter City to search" type="text"/>
                        <button type="submit">Search</button>
                    </form>
                </div>
                    
                <div className="right">
                </div>
            </div>
        </div>
    )
}


export default SearchWeather