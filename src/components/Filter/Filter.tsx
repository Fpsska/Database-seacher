import React from 'react';

import './filter.scss';

const Filter: React.FC = () => {
  return (
    <form className="filter-form">
      <div className="filter-form__wrapper">

        <select className="select select--column">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

        <select className="select select--condition">
          <option value="equal">equal</option>
          <option value="contain">contain</option>
          <option value="more">more</option>
          <option value="less">less</option>
        </select>

        <input className="input" type="text" placeholder="write there" />

      </div>
    </form>
  );
};

export default Filter;