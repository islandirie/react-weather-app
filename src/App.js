import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Weather5Days from './components/Weather5Days';
import getRequest from './components/Request';

function App() {
  
  const [weather, setWeather] = useState([]);

  const getWeather = async (onSubmit) => {
    const result = await getRequest(onSubmit);
    setWeather(result.data);
  };

  return (
    <div className="App">
      <Header onSubmit={getWeather}/>
      <div className='city'>{weather.city ? weather.city.name : 'Enter City & State'}</div>
      <Search onSubmit={getWeather} />
      <Weather5Days weather={weather.list} city={weather.city}/>
    </div>
  );
};

export default App;
