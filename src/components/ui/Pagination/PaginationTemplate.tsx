import React, { useState, useEffect } from 'react';

import { useAppDispatch } from 'app/hooks';

import { setCurrentPage } from 'app/slices/navSlice';

// /. imports

interface propTypes {
    text: string;
    currentPage: number;
    isDataLoading: boolean;
}

// /. interfaces

const PaginationTemplate: React.FC<propTypes> = props => {
    const { text, currentPage, isDataLoading } = props;

    const [isActive, setActive] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    useEffect(() => {
        // handle active class for nav__item el
        +text === currentPage ? setActive(true) : setActive(false);
    }, [text, currentPage]);

    const handleLinkAction = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        dispatch(setCurrentPage(+text));
    };

    return (
        <li
            className={isActive ? 'nav__item active' : 'nav__item'}
            onClick={e => !isDataLoading && handleLinkAction(e)}
        >
            <a
                className="nav__number"
                href="#"
            >
                {text}
            </a>
        </li>
    );
};

export default PaginationTemplate;
