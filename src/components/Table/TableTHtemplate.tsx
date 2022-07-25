import React from 'react';

import { useAppDispatch } from '../../app/hooks';

import { switchTHActiveStatus } from '../../app/slices/tableSlice';

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
    };

    return (
        <th className={isActive ? 'table__th active' : 'table__th'} onClick={handleTHstatus}>{text}</th>
    );
};

export default TableTHtemplate;