import React, { useEffect } from 'react';

import { Outlet } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { switchLoadingStatus } from '../../app/slices/tableSlice';
import { fetchTableData } from '../../api/fetchTableData';

import Pagination from '../ui/Pagination/Pagination';

import Preloader from '../ui/Preloader/Preloader';

import Filter from './Filter/Filter';

const Layout: React.FC = () => {
    const { currentPage, itemsPerPage } = useAppSelector(
        state => state.navSlice
    );
    const { isDataLoading, tableData } = useAppSelector(
        state => state.tableSlice
    );

    const dispatch = useAppDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(switchLoadingStatus(false));
        }, 1600);
        dispatch(fetchTableData());
    }, []);

    return (
        <>
            {isDataLoading && (
                <div className="page-preloader">
                    <Preloader />
                </div>
            )}
            <header className="header">
                <Filter />
            </header>
            <main className="main">
                <Outlet />
            </main>
            <footer className="footer">
                {tableData.length > 0 && (
                    <Pagination
                        currentPage={currentPage}
                        totalItems={tableData.length}
                        limitItems={itemsPerPage}
                        isDataLoading={isDataLoading}
                    />
                )}
            </footer>
        </>
    );
};

export default Layout;
