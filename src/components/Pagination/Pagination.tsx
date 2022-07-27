import React, { useState, useEffect } from 'react';

import { getConvertedArray } from '../../helpers/getConvertedArray';

import PaginationTemplate from './PaginationTemplate';

import './pagination.scss';

interface propTypes {
    currentPage: number,
    limitItems: number,
    totalItems: number
}

const Pagination: React.FC<propTypes> = (props) => { 

    const { totalItems, limitItems } = props;

    const [pagesCount, setPagesCoun] = useState<number>(0);
    const [pagesArray, setPagesArray] = useState<any[]>([]);

    useEffect(() => { //  define current pages count
        setPagesCoun(Math.ceil(totalItems / limitItems));
    }, [totalItems, limitItems]);

    useEffect(() => { // get array from pages count for render
        setPagesArray(getConvertedArray(1, pagesCount));
    }, [pagesCount]);

    return (
        <nav className="pagination">
            <ul className="nav">
                {pagesArray.map((item: any) => {
                    return (
                        <PaginationTemplate
                            key={item}
                            text={item}
                        />
                    );
                })}
            </ul>
        </nav>
    );
};

export default Pagination;