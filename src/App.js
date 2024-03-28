import React ,{useState} from 'react'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import Header from './components/Header'
import SearchandFliter from './components/SearchandFliter'
import data from './data.json';
import { Link } from 'react-router-dom';

function App() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  const [selectedContinent, setSelectedContinent] = useState('');

  const handleContinentChange = (continent) => {
    setSelectedContinent(continent);
    // You can perform any additional actions here based on the selected continent
  };

  const [searchText, setSearchText] = useState('');

    const handleSearch = (text) => {
      setSearchText(text);
      // You can perform any additional actions here based on the search text
    };

    
    
    return (
      <ReactLenis root>

      <div className='content-grid bg-slate-700'>
            <Header/>
          <div class="min-h-[88vh]">
            <SearchandFliter onSearch={handleSearch} onChange={handleContinentChange}/>
            {/* <p className='text-white'>Selected Continent: {selectedContinent}</p> */}
            <div class="grids py-8">
            {data.map(country => {
              const countryName = country.name.toLowerCase();
              const search = searchText.toLowerCase();
              const continentMatch = selectedContinent === '' || country.region === selectedContinent;
              const nameMatch = countryName.includes(search);
              if (continentMatch && nameMatch) {
                return (
                  <div key={country.id} className='bg-slate-800 rounded-xl overflow-hidden transition-all duration-300 hover:rounded-sm'>
                  <img src={country.flags.png} alt={`${country.name}-flag`} className='aspect-video w-full' loading='lazy'/>
                  <div className="text p-8 text-white">
                    <h1 className=' text-xl font-bold mb-4'>{country.name}</h1>
                    <p className='capitalize text-sm mb-1'><b>Population:</b> {country.population}</p>
                    <p className='capitalize text-sm mb-1'><b>Region:</b> {country.region}</p>
                    <p className='capitalize text-sm mb-1'><b>Capital:</b> {country.capital}</p>
                  </div>
                </div>
                );
              }
              return null;
            })}
            </div>
          
          </div>

      </div>

    </ReactLenis>
  )
}

export default App