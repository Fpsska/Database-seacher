import React from 'react';

import { useAppSelector } from '../../app/hooks';

import { ItableData, ItableHead } from '../../Types/tableSliceTypes';

import TableTRtemplate from './TableTRtemplate';
import TableTHtemplate from './TableTHtemplate';

import './table.scss';

const Table: React.FC = () => {

    const { tableData, tableHeadData, filterConditionOpt } = useAppSelector(state => state.tableSlice);

    return (
        <table className="table">
            <thead>
                <tr className="table__tr">
                    {tableHeadData.map((item: ItableHead) => {
                        return (
                            <TableTHtemplate
                                key={item.id}
                                id={item.id}
                                text={item.text}
                                isActive={item.isActive}
                                filterConditionOpt={filterConditionOpt}
                            />
                        );
                    })}
                </tr>
            </thead>
            <tbody>
                {tableData.map((item: ItableData) => {
                    return (
                        <TableTRtemplate
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