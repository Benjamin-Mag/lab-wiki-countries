import './App.css';
import CountriesList from './components/CountriesList';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import countryList from './countries.json';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [countries, setCountries] = useState(countryList);

  return (
    <BrowserRouter>
      <NavBar />
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
