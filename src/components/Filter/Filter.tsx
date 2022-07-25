import React from 'react';

import { useAppDispatch } from '../../app/hooks';

import {
  setFilterConditionOpt,
  setFilterColumnOpt,
  switchTHActiveStatus
} from '../../app/slices/tableSlice';

import './filter.scss';

const Filter: React.FC = () => {

  const dispatch = useAppDispatch();

  const handleSelectCondition = (eventValue: string): void => {
    dispatch(setFilterConditionOpt(eventValue));
  };

  const handleSelectColumn = (eventValue: string): void => {
    dispatch(setFilterColumnOpt(eventValue));
    dispatch(switchTHActiveStatus({ id: eventValue, status: true }));
  };

  return (
    <form className="filter-form">
      <div className="filter-form__wrapper">

        <select className="select select--column" defaultValue={'name'} onChange={e => handleSelectColumn(e.target.value)}>
          <option value="name">name</option>
          <option value="count">count</option>
          <option value="distance">distance</option>
        </select>

        <select className="select select--condition" defaultValue={'contain'} onChange={e => handleSelectCondition(e.target.value)}>
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