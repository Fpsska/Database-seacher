import React, { useEffect } from 'react';

import { Outlet } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { switchLoadingStatus } from '../../app/slices/tableSlice';

import Pagination from '../Pagination/Pagination';

import Preloader from './Preloader/Preloader';

const Layout: React.FC = () => {

    const { isDataLoading } = useAppSelector(state => state.tableSlice);

    const dispatch = useAppDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(switchLoadingStatus(false));
        }, 1600);
    }, []);

    return (
        <>
            {isDataLoading && <div className="page-preloader"><Preloader /></div>}
            <header className="header"></header>
            <main className="main">
                <Outlet />
            </main>
            <footer className="footer"><Pagination/></footer>
        </>
    );
};

export default Layout;
