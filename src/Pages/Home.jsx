import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchandFilter from '../components/SearchandFilter';

function Home({ data, handleCountrySelect }) {
  const [selectedContinent, setSelectedContinent] = useState('');
  const [searchText, setSearchText] = useState('');

  const handleContinentChange = (continent) => {
    setSelectedContinent(continent);
    handleCountrySelect(null); // Clear selected country when changing continent
  };

  const handleSearch = (text) => {
    setSearchText(text);
    handleCountrySelect(null); // Clear selected country when performing a search
  };

  if (!data) {
    return <div>No data available.</div>;
  }

  return (
    <div>
      <SearchandFilter onSearch={handleSearch} onChange={handleContinentChange} />
      <div className="grids py-8">
        {data.map((country, index) => {
          const countryName = country.name.toLowerCase();
          const search = searchText.toLowerCase();
          const continentMatch = selectedContinent === '' || country.region === selectedContinent;
          const nameMatch = countryName.includes(search);
          if (continentMatch && nameMatch) {
            return (
              <Link to={`/${country.name}`}  onClick={() => handleCountrySelect(country)} key={index} className="card-link h-full">
                <div className='bg-slate-800 rounded-xl overflow-hidden transition-all duration-300 hover:rounded-sm'>
                  <img src={country.flags.png} alt={`${country.name}-flag`} className='aspect-video w-full  object-cover' loading='lazy' />
                  <div className="text p-8 text-white">
                    <h1 className=' text-xl font-bold mb-4'>{country.name}</h1>
                    <p className='capitalize text-sm mb-1'><b>Population:</b> {country.population}</p>
                    <p className='capitalize text-sm mb-1'><b>Region:</b> {country.region}</p>
                    <p className='capitalize text-sm mb-1'><b>Capital:</b> {country.capital}</p>
                  </div>
                </div>
              </Link>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default Home;
