import Weather from "./Weather";

function Weather5Days({weather, city}) {
    
    if (!weather){
        return <div>Loading...</div>
    }

    const renderWeather = weather.map((weather, ind) =>{
        return ind % 8 == 0 ? 
        <div key={weather.dt}>
            <Weather weather={weather} city={city.name} /> 
        </div> : 
        null;
    });
    
    return (
        <div className='WeatherRow'>
            {renderWeather}
        </div>
    );
};

export default Weather5Days;