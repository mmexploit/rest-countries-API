import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CardsContainer from './components/cards-container/cards-container.component';
import DetailedView from './components/detailed-view/detailed-view.component';
import FilterDropdown from './components/filter-dropdown/filter-dropdown.component';
import SearchBar from './components/search-bar/search-bar.component';

function App() {
  const [ data, setData] = useState();
  const [ searchQuery, setSearchQuery ] = useState("")
  const [ filterQuery, setFilterQuery ] = useState("");

  useEffect(() => {
    const fetchData = () => {
      try {
        fetch("https://restcountries.com/v3.1/all")
          .then(response => response.json())
          .then(json => setData(json))
      } catch (error) {
        console.log("Error encountered")
        console.log(error)
      }
    }

    fetchData()
  }, [])

  if (data === undefined) {
    return null;
  }

  console.log(filterQuery)
  const filteredInitial = [...data].filter(country => country.region.includes(filterQuery))
  const filteredFinal = [...filteredInitial].filter(country => country.name.official.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
      <Routes>
        <Route path="/" element={
          <div className="App">
            <div className='search-and-filter'>
              <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
              <FilterDropdown filterQuery={filterQuery} setFilterQuery={setFilterQuery}/>
            </div>
            <CardsContainer data={filteredFinal}/>
          </div>
        }/>
        <Route path="/:searchName" element={<DetailedView />}/>
      </Routes>
    
  );
}

export default App;
