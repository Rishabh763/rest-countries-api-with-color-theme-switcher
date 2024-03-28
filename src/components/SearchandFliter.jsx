import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";

function SearchandFliter({ onChange, onSearch }) { // Fixed destructuring of props

    const [selectedContinent, setSelectedContinent] = useState('');

    const handleSelectChange = (event) => {
        const continent = event.target.value;
        setSelectedContinent(continent);
        onChange(continent); // Corrected passing of selected continent to the parent component
    };

    const handleInputChange = (event) => {
      const text = event.target.value;
      
      onSearch(text); // Pass the search text to the parent component
    };

   

  return (
    <div className='flex flex-wrap gap-4 py-6 justify-between sticky top-[12vh]'>
        <div className="flex items-center  gap-4 py-2 px-6 rounded bg-slate-800"><IoSearch size={32} color='white'/><input className='bg-transparent focus:outline-none text-white' type="text" placeholder='Search for a country...' onChange={handleInputChange}/></div> {/* Added onChange event listener */}
        <select className='text-white px-4 py-2 rounded bg-slate-800' id="continentSelect" value={selectedContinent} onChange={handleSelectChange} >
            <option value="">Fliter by Region</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    </div>
  )
}

export default SearchandFliter;
