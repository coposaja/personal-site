import React from 'react';

import './YearNavigator.scss';

const years = [0, 2017, 2018, 2019, 2020];

const YearNavigator = ({ activeYear, changeYear }) => {
  return (
    <nav>
      <ul>
        {years.map((year) => (
          <li
            key={year}
            className={year === activeYear ? 'active' : ''}
            onClick={() => changeYear(year)}
          >
            <span>
              {year ? year : "All"}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default YearNavigator;
