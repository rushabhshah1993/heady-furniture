import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './breadcrumbs.scss';

const Breadcrumbs = props => {
    let crumbs = props.positions.map((page, index) => {
        let crumbClasses = [styles.crumbItems];
        if(index === props.positions.length-1)
            crumbClasses.push(styles.activeCrumb);

        return (
            <React.Fragment key={page}>
                <span className={crumbClasses.join(' ')}>
                    {page}
                </span>
                {
                    index !== props.positions.length-1 &&
                    <FontAwesomeIcon 
                        icon={'caret-right'} 
                        size={'xs'}
                        className={styles.caret} />
                }
            </React.Fragment>
        )
    });

    return (
        <div className={styles.breadcrumbsContainer}>
            <FontAwesomeIcon icon={'home'} className={styles.crumbItems} />
            <FontAwesomeIcon 
                icon={'caret-right'} 
                size={'xs'}
                className={styles.caret} />
            {crumbs}
        </div>
    )
}

export default Breadcrumbs;
