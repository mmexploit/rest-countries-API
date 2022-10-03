import React, { useEffect, useState } from 'react';
import './App.css';
import CardsContainer from './components/cards-container/cards-container.component';
import SearchBar from './components/search-bar/search-bar.component';

function App() {
  const [ data, setData] = useState();
  const [ searchQuery, setSearchQuery ] = useState("");

  useEffect(() => {
    const fetchData = () => {
      fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(json => setData(json))
    }

    fetchData()
  }, [])

  if (data === undefined) {
    return null;
  }

  const filtered = [...data].filter(country => country.name.official.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="App">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <CardsContainer data={filtered}/>
    </div>
  );
}

export default App;
