import React from 'react';

interface propTypes {
    date: string,
    name: string,
    count: number
    distance: number
}

const TableTemplate: React.FC<propTypes> = (props) => {

    const {
        date,
        name,
        count,
        distance
    } = props;

    return (
        <tr>
            <td>{date}</td>
            <td>{name}</td>
            <td>{count}</td>
            <td>{distance}</td>
        </tr>
    );
};

export default TableTemplate;