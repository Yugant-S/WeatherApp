import { useState } from 'react';

function SearchBar({ onSearch }) {
    const [city, setCity] = useState('');
    return (
    <>
    <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
    />
    <button onClick={() => onSearch(city)}>Search</button>
    </>
    )
}

export default SearchBar;
