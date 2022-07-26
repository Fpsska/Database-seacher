import React from 'react';

import { useAppDispatch } from '../../app/hooks';

import { switchTHActiveStatus, setFilterColumnOpt } from '../../app/slices/tableSlice';

import { useCaseAction } from '../../hooks/useCaseAction';

interface propTypes {
    id: string,
    text: string,
    isActive: boolean,
    filterConditionOpt: string
}

const TableTHtemplate: React.FC<propTypes> = (props) => {

    const { id, text, isActive, filterConditionOpt } = props;

    const defineCaseAction = useCaseAction();

    const dispatch = useAppDispatch();

    const handleTHstatus = (): void => {
        dispatch(switchTHActiveStatus({ id, status: true }));
        dispatch(setFilterColumnOpt(id));
        defineCaseAction(id, filterConditionOpt);
        console.log(id)
    };

    return (
        <th className={isActive ? 'table__th active' : 'table__th'} onClick={() => id !== 'date' && handleTHstatus()}>{text}</th>
    );
};

export default TableTHtemplate;