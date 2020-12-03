import React from 'react';

import styles from './policies.scss';

const Policies = props => {
    let policies = props.policies.map(policy => {
        return (
            <div className={styles.policy} key={policy.id}> 
                <div className={styles.iconContainer}>
                    {policy.icon}
                </div>
                <span>{policy.text}</span>
            </div>
        )
    })

    return (
        <div className={styles.policiesContainer}>
            {policies}
        </div>
    )
}

export default Policies;
