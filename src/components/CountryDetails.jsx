import React from 'react';
import { useParams } from 'react-router-dom';

{
  /* <Route path="/:id" element={ <SomeComponent someData={someData} /> } /> */
}

const CountryDetails = (props) => {
  const { cca3 } = useParams();

  const foundCountry = props.countries.find(
    (element) => element.alpha3Code === cca3
  );
  console.log('found one', foundCountry);
  return <div>{foundCountry.name.common}</div>;
};

export default CountryDetails;
