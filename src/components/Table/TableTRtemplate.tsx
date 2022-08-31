import React from 'react';

// /. imports

interface propTypes {
    date: string,
    name: string,
    count: number,
    distance: number
}

// /. interfaces

const TableTRtemplate: React.FC<propTypes> = (props) => {

    const { date, name, count, distance } = props;

    return (
        <tr className="table__tr">
            <td className="table__td">{date}</td>
            <td className="table__td">{name}</td>
            <td className="table__td">{count}</td>
            <td className="table__td">{distance}</td>
        </tr>
    );
};

export default TableTRtemplate;