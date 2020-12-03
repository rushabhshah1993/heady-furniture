import React, { useState } from 'react';
import Ratings from '../../../components/Ratings/Ratings';

import styles from './review.scss';

const Review = props => {
    const [image, setImage] = useState();

    let review = props.review;
    import(`./../../../assets/images/${review.profilePicTitle}`)
    .then(response => {
        setImage(response);
    })

    return (
        <div className={styles.reviewContainer} style={{display: props.display}}>
            <div className={styles.userBox}>
                <img src={image && image.default} className={styles.userImg} />
                <div className={styles.userInfo}>
                    <span className={styles.username}>{review.username}</span>
                    <span className={styles.date}>{review.date}</span>
                </div>
            </div>
            <div className={styles.reviewBox}>
                <span className={styles.reviewTitle}>{review.title}</span>
                <div>
                    <Ratings rating={review.rating} size={'xs'} />
                </div>
                <span className={styles.reviewDesc}>{review.desc}</span>
                <span className={styles.addComment}>Add Comment</span>
            </div>
        </div>
    )
}

export default Review;
