import React from 'react';

import styles from './additionalInfo.scss';

const AdditionalInfo = props => {
    let elements = props.info.map(info => {
        return (
            <li key={info.id}>
                <span className={styles.key}>{info.name}: </span> 
                <span className={styles.value}>{info.value}</span>
            </li>
        )
    })
    return <ul>{elements}</ul>;
}

export default AdditionalInfo;
