// import { computeHeadingLevel } from '@testing-library/react';
import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  return (
    <ul>
      {props.countries.map((e) => {
        return (
          <div>
            <li key={e.alpha3Code}>
              <Link to={`/${e.alpha3Code}`}>{e.name.official}</Link>
            </li>
          </div>
        );
      })}
    </ul>
  );
};

export default CountriesList;
