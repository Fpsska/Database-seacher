import React from 'react';

interface propTypes {
    text: string,
    // isActive: boolean
    // currentPage: number,
    // setCurrentPage: {}
}

const PaginationTemplate: React.FC<propTypes> = (props) => {

    const { text } = props; // , isActive  {isActive ? 'nav__item active' : 'nav__item'}

    return (
        <li className="nav__item">
            <a className="nav__number" href="#">{text}</a>
        </li>
    );
};

export default PaginationTemplate;