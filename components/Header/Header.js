import React from 'react';
import headerStyles from './Header.scss';
import {SITE_TITLE} from '../../constants/constants';

const Header = (props) => {
    const {className = '', ...attrs} = props;

    return (
        <header className={`${className} ${headerStyles.header}`} {...attrs}>
            <nav>
                {SITE_TITLE}
            </nav>
        </header>
    );
};

export default Header;