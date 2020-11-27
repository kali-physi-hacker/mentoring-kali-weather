import React, {useEffect, useState} from 'react';
import axios from 'axios';


const APP_ID = "f1b8fe659c4596fdcdb52b02218fd116"


function Home () {
    const [coords, setCoords] = useState({})
    const [weatherData, setWeatherData] = useState({})

    const getCurrentWeather = () => {
        if (coords.longitude !== undefined) {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${APP_ID}`)
            .then((response)=> {
                setWeatherData(response.data)
            })
        }
        
    }

    useEffect(()=> {
        navigator.geolocation.getCurrentPosition((position)=> {
            setCoords(position.coords)
            getCurrentWeather()
        }, (error)=> {
            console.log("Hey this is your err:", error)
        })
    }, [])
    return (
        <div>
            <h1>Hey am in home</h1>
        </div>
    )
}


export default Home;