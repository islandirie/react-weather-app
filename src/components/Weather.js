import Icons from './Icons';

function Weather({weather, city}) {

    const date = new Date(weather.dt_txt);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dayOfWeek = daysOfWeek[date.getUTCDay()];
    const month = months[date.getUTCMonth()];
    const day = date.getUTCDate();
    
    return (
        <div className='Weather'>
             <Icons icon={weather.weather[0].icon} h='50px'/>
             <div>{dayOfWeek}, {day} <p className='compCity'>{city}</p> </div>
             <hr className='line'/>
             <ul>
                <li>{weather.weather[0].description}</li>
                <li>min temp: {weather.main.temp_min} F°</li>
                <li>max temp: {weather.main.temp_max} F°</li>
            </ul>
        </div>
    );
};

export default Weather;