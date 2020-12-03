import React from 'react';

import styles from './section1.scss';

const Section1 = () => {
    return (
        <div id={"container"} className={styles.section1Container}>
            <div className={styles.textContainer}>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                <br /><br />
                Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
            </div>
            <div className={styles.imgContainer}></div>
            <div className={styles.section1Title}>
                At vero eos et accusamus et iusto odio dignissimos.
            </div>
        </div>
    )
}

export default Section1;
