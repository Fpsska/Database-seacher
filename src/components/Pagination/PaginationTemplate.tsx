import React from 'react';

import { useAppDispatch } from '../../app/hooks';

import { setCurrentPage } from '../../app/slices/navSlice';

interface propTypes {
    text: string
}

const PaginationTemplate: React.FC<propTypes> = (props) => {

    const { text } = props; // , isActive  {isActive ? 'nav__item active' : 'nav__item'}

    const dispatch = useAppDispatch();

    return (
        <li className="nav__item">
            <a className="nav__number" href="#" onClick={() => dispatch(setCurrentPage(+text))}>{text}</a>
        </li>
    );
};

export default PaginationTemplate;