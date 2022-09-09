import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import axios from 'axios';

import CountriesList from './components/CountriesList';
import NavBar from './components/NavBar';
import CountryDetails from './components/CountryDetails';
import countryList from './countries.json';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [countries, setCountries] = useState(countryList);
  const url = 'https://ih-countries-api.herokuapp.com/countries';

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log('OMG', response.data);
      setCountries(response.data);
    });
  }, []);

  const mesCouilles = setCountries;

  return (
    <BrowserRouter>
      <NavBar class="navbar navbar-dark bg-primary mb-3" />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route
              path="/:cca3"
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
