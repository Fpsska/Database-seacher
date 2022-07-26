import React, { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';

import {
  setFilterConditionOpt,
  setFilterColumnOpt,
  switchTHActiveStatus,
  filterData
} from '../../app/slices/tableSlice';

import { useCaseAction } from '../../hooks/useCaseAction';

import './filter.scss';

const Filter: React.FC = () => {

  const { filterConditionOpt, filterColumnOpt } = useAppSelector(state => state.tableSlice);

  const [inputValue, setInputValue] = useState<string>('');

  const defineCaseAction = useCaseAction();

  const dispatch = useAppDispatch();

  const handleSelectCondition = (eventValue: string): void => {
    dispatch(setFilterConditionOpt(eventValue));
    dispatch(switchTHActiveStatus({ id: filterColumnOpt, status: true }));
    defineCaseAction(filterColumnOpt, filterConditionOpt);
  };

  const handleSelectColumn = (eventValue: string): void => {
    dispatch(setFilterColumnOpt(eventValue));
    dispatch(switchTHActiveStatus({ id: eventValue, status: true }));
    inputHandler('', '');
  };

  const inputHandler = (value: string, name: string): void => {
    switch (name) {
      case 'name':
        setInputValue(value.replace(/[^a-zA-Z\s]/g, ''));
        dispatch(filterData({ name: 'name', value: value.trim() }));
        break;
      case 'count':
        setInputValue(value.replace(/[^0-9]/g, ''));
        dispatch(filterData({ name: 'count', value: value.trim() }));
        break;
      case 'distance':
        setInputValue(value.replace(/[^0-9]/g, ''));
        dispatch(filterData({ name: 'distance', value: value.trim() }));
        break;
      default:
        return setInputValue('');
    }
  };

  return (
    <form className="filter-form">
      <div className="filter-form__wrapper">

        <select className="select select--column" value={filterColumnOpt} onChange={e => handleSelectColumn(e.target.value)}>
          <option value="name">name</option>
          <option value="count">count</option>
          <option value="distance">distance</option>
        </select>

        <select className="select select--condition" defaultValue={filterConditionOpt} onChange={e => handleSelectCondition(e.target.value)}>
          <option value="equal">equal</option>
          <option value="contain">contain</option>
          <option value="more">more</option>
          <option value="less">less</option>
        </select>

        <input
          className="input"
          type="text"
          placeholder="write there"
          onChange={e => inputHandler(e.target.value, filterColumnOpt)}
          value={inputValue}
        />

      </div>
    </form>
  );
};

export default Filter;