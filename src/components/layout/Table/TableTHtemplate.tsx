import React from 'react';

import { useAppDispatch } from 'app/hooks';

import {
    switchTHActiveStatus,
    setFilterColumnOpt
} from 'app/slices/tableSlice';

import { useCaseAction } from 'hooks/useCaseAction';

// /. imports

interface propTypes {
    id: string;
    text: string;
    isActive: boolean;
    filterConditionOpt: string;
    isDataLoading: boolean;
    error: string;
}

// /. interfaces

const TableTHtemplate: React.FC<propTypes> = props => {
    const { id, text, isActive, filterConditionOpt, isDataLoading, error } =
        props;

    const { defineCaseAction } = useCaseAction();

    const dispatch = useAppDispatch();

    const onTableHeadClick = (): void => {
        const validCondition =
            id !== 'date' && !isDataLoading && !error && !isActive;
        if (validCondition) {
            dispatch(switchTHActiveStatus({ id, status: true }));
            dispatch(setFilterColumnOpt(id));
            defineCaseAction(id, filterConditionOpt);
        }
    };

    return (
        <th
            className={isActive ? 'table__th active' : 'table__th'}
            onClick={onTableHeadClick}
        >
            {text}
        </th>
    );
};

export default TableTHtemplate;
