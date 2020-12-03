import React from 'react';

import styles from './header.scss';

import Ratings from './../../../../components/Ratings/Ratings';

const Header = props => {
    return (
        <div className={styles.header}>
            <p className={styles.productTitle}>
                {props.name}
            </p>
            <div className={styles.subHeader}>
                <Ratings rating={props.rating} />
                <span className={styles.reviewsCount}>
                    ({props.reviewsCount})
                </span>
            </div>
            <div className={styles.price}>
                <span className={styles.originalPrice}>
                    {`${props.currency}${props.mrp}`}
                </span>
                <span className={styles.discountPrice}>
                    {`${props.currency}${props.discountPrice}`}
                </span>
            </div>
        </div>
    )
}

export default Header;
