import React from 'react';

interface propTypes {
    text: string,
    isActive: boolean
}

const PaginationTemplate: React.FC<propTypes> = (props) => {

    const { text, isActive } = props;

    return (
        <li className={isActive ? 'nav__item active' : 'nav__item'}>
            <a className="nav__number" href="#">{text}</a>
        </li>
    );
};

export default PaginationTemplate;