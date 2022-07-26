import React from 'react';

import { useAppDispatch } from '../../app/hooks';

import { switchTHActiveStatus, setFilterColumnOpt } from '../../app/slices/tableSlice';

interface propTypes {
    id: string,
    text: string,
    isActive: boolean
}

const TableTHtemplate: React.FC<propTypes> = (props) => {

    const { id, text, isActive } = props;

    const dispatch = useAppDispatch();

    const handleTHstatus = (): void => {
        dispatch(switchTHActiveStatus({ id, status: true }));
        dispatch(setFilterColumnOpt(id));
    };

    return (
        <th className={isActive ? 'table__th active' : 'table__th'} onClick={() => id !== 'date' && handleTHstatus()}>{text}</th>
    );
};

export default TableTHtemplate;