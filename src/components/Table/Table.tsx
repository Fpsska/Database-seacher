import React from 'react';

import { useAppSelector } from '../../app/hooks';

import { ItableData } from '../../Types/tableSliceTypes';

import TableTemplate from './TableTemplate';

import './table.scss';

const Table: React.FC = () => {

    const { tableData } = useAppSelector(state => state.tableSlice);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Count (pc)</th>
                    <th>Distance (m)</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((item: ItableData) => {
                    return (
                        <TableTemplate
                            key={item.id}
                            date={item.date}
                            name={item.name}
                            count={item.count}
                            distance={item.distance}
                        />
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;