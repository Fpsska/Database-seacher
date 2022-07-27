import React from 'react';

import { useAppSelector } from '../../app/hooks';

import Table from '../Table/Table';
import Filter from '../Filter/Filter';
import Pagination from '../Pagination/Pagination';

const MainPage: React.FC = () => {

    const { currentPage, itemsPerPage } = useAppSelector(state => state.navSlice);
    const { tableData } = useAppSelector(state => state.tableSlice);

    return (
        <div className="page">
            <div className="page__wrapper">
                <Filter />
                <Table />
                <Pagination
                    currentPage={currentPage}
                    totalItems={tableData.length}
                    limitItems={itemsPerPage}
                />
            </div>
        </div>
    );
};

export default MainPage;