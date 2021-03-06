import React from 'react';

import './YearNavigator.scss';

const years = [0, 2017, 2018, 2019, 2020];

const YearNavigator = ({ activeYear, changeYear }) => {
  return (
    <nav className="year-navigator">
      <ul>
        {years.map((year) => (
          <li
            key={year}
            className={year === activeYear ? 'active' : ''}
          >
            <p
              onClick={() => changeYear(year)}
            >
              {year ? year : "All"}
            </p>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default YearNavigator;
