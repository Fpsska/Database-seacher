import React from 'react';

import { useAppDispatch } from '../../app/hooks';

import { setFilterConditionOpt, setFilterColumnOpt } from '../../app/slices/tableSlice';

import './filter.scss';

const Filter: React.FC = () => {

  const dispatch = useAppDispatch();

  const handleSelectCondition = (e: any): void => {
    dispatch(setFilterConditionOpt(e.target.value));
  };

  const handleSelectColumn = (e: any): void => {
    dispatch(setFilterColumnOpt(e.target.value));
  };

  return (
    <form className="filter-form">
      <div className="filter-form__wrapper">

        <select className="select select--column" defaultValue={'name'} onChange={e => handleSelectColumn(e)}>
        <option value="name">name</option>
          <option value="count">count</option>
          <option value="distance">distance</option>
        </select>

        <select className="select select--condition" defaultValue={'contain'} onChange={e => handleSelectCondition(e)}>
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