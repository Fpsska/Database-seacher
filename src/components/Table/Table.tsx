import React, { useState, useEffect } from 'react';

import { useAppSelector } from '../../app/hooks';

import { ItableData, ItableHead } from '../../Types/tableSliceTypes';

import TableTRtemplate from './TableTRtemplate';
import TableTHtemplate from './TableTHtemplate';

import './table.scss';

const Table: React.FC = () => {

    const { tableData, tableHeadData, filterConditionOpt, isDataLoading, error } = useAppSelector(state => state.tableSlice);
    const { currentPage, itemsPerPage } = useAppSelector(state => state.navSlice);

    const [empty, setEmpty] = useState<boolean>(false);

    const indexOfLastEl = currentPage * itemsPerPage;
    const indexOfFirstEl = indexOfLastEl - itemsPerPage;
    const visibleEl = tableData.slice(indexOfFirstEl, indexOfLastEl); // control of tableData[] items render 

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
                                
                                {...item}
                                filterConditionOpt={filterConditionOpt}
                                isDataLoading={isDataLoading}
                                error={error}
                            />
                        );
                    })}
                </tr>
            </thead>
            <tbody className={empty ? 'table__body empty' : 'table__body'}>
                {
                    !isDataLoading && error ?
                        <h1 className="message message--error">{`Error: ${error}`}</h1>
                        :
                        !error && !isDataLoading && empty ?
                            <h1 className="message">no matches</h1>
                            :
                            <>
                                {visibleEl.map((item: ItableData) => {
                                    return (
                                        <TableTRtemplate
                                            key={item.id}

                                            {...item}
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