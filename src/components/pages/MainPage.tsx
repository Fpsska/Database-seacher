import React from 'react';

import Table from '../Table/Table';
import Filter from '../Filter/Filter';

const MainPage: React.FC = () => {
    return (
        <div className="page">
            <div className="page__wrapper">
                <Filter />
                <Table />
            </div>
        </div>
    );
};

export default MainPage;