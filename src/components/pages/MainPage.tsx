import React from 'react';

import Table from '../Table/Table';
import Filter from '../Filter/Filter';

const MainPage: React.FC = () => {
    return (
        <>
            <Filter />
            <Table />
        </>
    );
};

export default MainPage;