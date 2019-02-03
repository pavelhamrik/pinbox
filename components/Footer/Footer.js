import React from 'react';
import footerStyles from './Footer.scss';

const Footer = (props) => {
    const {className = '', ...attrs} = props;
    const styleClassNames = className
        .split(' ')
        .concat(['footer'])
        .map(item => footerStyles[item] ? footerStyles[item] : item)
        .join(' ');

    return (
        <footer className={styleClassNames} {...attrs}>
            …
        </footer>
    );
};

export default Footer;