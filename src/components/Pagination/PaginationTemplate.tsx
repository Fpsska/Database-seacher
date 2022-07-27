import React, { useState, useEffect } from 'react';

import { useAppDispatch } from '../../app/hooks';

import { setCurrentPage } from '../../app/slices/navSlice';

interface propTypes {
    text: string,
    currentPage: number
}

const PaginationTemplate: React.FC<propTypes> = (props) => {

    const { text, currentPage } = props; // , isActive  

    const [isActive, setActive] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    useEffect(() => { // define active class for nav__item el
        +text === currentPage ? setActive(true) : setActive(false);
    }, [text, currentPage]);


    return (
        <li className={isActive ? 'nav__item active' : 'nav__item'} onClick={() => dispatch(setCurrentPage(+text))}>
            <a className="nav__number" href="#" >{text}</a>
        </li>
    );
};

export default PaginationTemplate;