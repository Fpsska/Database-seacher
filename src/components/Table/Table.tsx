import React, { useState, useEffect } from 'react';

import { useAppSelector } from '../../app/hooks';

import { ItableData, ItableHead } from '../../Types/tableSliceTypes';

import TableTRtemplate from './TableTRtemplate';
import TableTHtemplate from './TableTHtemplate';

import './table.scss';

const Table: React.FC = () => {

    const { tableData, tableHeadData, filterConditionOpt, isDataLoading } = useAppSelector(state => state.tableSlice);

    const [empty, setEmpty] = useState<boolean>(false);

    useEffect(() => { // display alternative content when tableData[] is empty
        tableData.length === 0 ? setEmpty(true) : setEmpty(false);
    }, [tableData]);

    return (
        <table className="table">
            <thead className="table__head">
                <tr className="table__tr">
                    {tableHeadData.map((item: ItableHead) => {
                        return (
                            <TableTHtemplate
                                key={item.id}
                                id={item.id}
                                text={item.text}
                                isActive={item.isActive}
                                filterConditionOpt={filterConditionOpt}
                                isDataLoading={isDataLoading}
                            />
                        );
                    })}
                </tr>
            </thead>
            <tbody className={empty ? 'table__body empty' : 'table__body'}>
                {empty ?
                    <h1 className="message">no matches</h1>
                    :
                    <>
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
                    </>
                }
            </tbody>
        </table>
    );
};

export default Table;