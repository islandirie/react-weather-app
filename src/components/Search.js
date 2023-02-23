import { useState } from 'react';

function Search({onSubmit}){

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(inputValue);

    };
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    return(
        <div className='Search'>
            <div>
                <form onSubmit={handleSubmit}>
                    <input value={inputValue} onChange={handleChange} placeholder="Search by City, State" />
                    <button type='submit'>Get Weather</button>
                </form>
            </div>
            
        </div>
    );
};

export default Search;