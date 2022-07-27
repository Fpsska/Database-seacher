import React from 'react';

import { useAppSelector } from '../../app/hooks';

import PaginationTemplate from './PaginationTemplate';

import './pagination.scss';

const Pagination: React.FC = () => {

    const { navTemplatesData } = useAppSelector(state => state.navSlice);

    return (
        <nav className="pagination">
            <ul className="nav">
                {navTemplatesData.map(item => {
                    return (
                        <PaginationTemplate
                            key={item.id}
                            text={item.text}
                            isActive={item.isActive}
                        />
                    );
                })}
            </ul>
        </nav>
    );
};

export default Pagination;