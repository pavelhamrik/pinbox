import React from 'react';
import headerStyles from './Heading.scss';

const Heading = (props) => {
    const {className = '', level = 2, children, ...attrs} = props;
    const styleClassNames = className
        .split(' ')
        .concat(`h${level}`)
        .map(item => headerStyles[item] ? headerStyles[item] : item)
        .join(' ');

    switch (level) {
        case 1:
            return <h1 className={styleClassNames} {...attrs}>{children}</h1>;
        case 2:
            return <h2 className={styleClassNames} {...attrs}>{children}</h2>;
        case 3:
            return <h3 className={styleClassNames} {...attrs}>{children}</h3>;
        default:
            return <h2 className={styleClassNames} {...attrs}>{children}</h2>;
    }
};

export default Heading;