import i_01d from '../weather-icons/01d.svg';
import i_02d from '../weather-icons/02d.svg';
import i_03d from '../weather-icons/03d.svg';
import i_04d from '../weather-icons/04d.svg';
import i_09d from '../weather-icons/09d.svg';
import i_10d from '../weather-icons/10d.svg';
import i_11d from '../weather-icons/11d.svg';
import i_13d from '../weather-icons/13d.svg';
import i_50d from '../weather-icons/50d.svg';
import i_01n from '../weather-icons/01n.svg';
import i_02n from '../weather-icons/02n.svg';
import i_03n from '../weather-icons/03n.svg';
import i_04n from '../weather-icons/04n.svg';
import i_09n from '../weather-icons/09n.svg';
import i_10n from '../weather-icons/10n.svg';
import i_11n from '../weather-icons/11n.svg';
import i_13n from '../weather-icons/13n.svg';
import i_50n from '../weather-icons/50n.svg';

const imageMap = {
  '01d': i_01d,
  '02d': i_02d,
  '03d': i_03d,
  '04d': i_04d,
  '09d': i_09d,
  '10d': i_10d,
  '11d': i_11d,
  '13d': i_13d,
  '50d': i_50d,
  '01n': i_01n,
  '02n': i_02n,
  '03n': i_03n,
  '04n': i_04n,
  '09n': i_09n,
  '10n': i_10n,
  '11n': i_11n,
  '13n': i_13n,
  '50n': i_50n,
};

function Icons({icon, w, h}) {
    
    return (
        <div className='Icons'>
            <img src={imageMap[icon]} width={w} height={h}/>
        </div>
    );
};

export default Icons;