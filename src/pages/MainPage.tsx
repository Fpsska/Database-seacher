import React from 'react';

import Table from 'components/layout/Table/Table';

// /. imports

const MainPage: React.FC = () => {
    return (
        <div className="page">
            <div className="page__wrapper">
                <div className="table-wrapper">
                    <Table />
                </div>
            </div>
        </div>
    );
};

export default MainPage;
