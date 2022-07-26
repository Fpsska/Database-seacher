import React from 'react';

import { useAppDispatch } from '../../app/hooks';

import { switchTHActiveStatus, setFilterColumnOpt, sortData } from '../../app/slices/tableSlice';

interface propTypes {
    id: string,
    text: string,
    isActive: boolean,
    filterConditionOpt: string
}

const TableTHtemplate: React.FC<propTypes> = (props) => {

    const { id, text, isActive, filterConditionOpt } = props;

    const dispatch = useAppDispatch();

    const defineCaseAction = (id: string): void => {
        switch (id) {
            case 'name':
                dispatch(sortData({ filterColumnOpt: id, filterConditionOpt }));
                break;
            case 'count':
                dispatch(sortData({ filterColumnOpt: id, filterConditionOpt }));
                break;
            case 'distance':
                dispatch(sortData({ filterColumnOpt: id, filterConditionOpt }));
                break;
        }
    };

    const handleTHstatus = (): void => {
        dispatch(switchTHActiveStatus({ id, status: true }));
        dispatch(setFilterColumnOpt(id));
        defineCaseAction(id);
    };

    return (
        <th className={isActive ? 'table__th active' : 'table__th'} onClick={() => id !== 'date' && handleTHstatus()}>{text}</th>
    );
};

export default TableTHtemplate;