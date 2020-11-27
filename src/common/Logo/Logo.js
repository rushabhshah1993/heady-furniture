import React from 'react';
import Icon from './../../assets/images/favicon.png';

import styles from './Logo.scss';

const Logo = props => {
    return (
        <div className="logo">
            <img 
                src={Icon} 
                alt="Heady Furniture Logo"
                className={styles[props.size] || styles.small} />
        </div>
    )
}

export default Logo;
