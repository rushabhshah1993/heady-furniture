import React, { useState } from 'react';
import { connect } from 'react-redux';

import styles from './reviews.scss';

import Ratings from './../../components/Ratings/Ratings';
import Review from './Review/Review';

const Reviews = props => {
    const [visibleReviews, setVisibilityReviews] = useState(2);
    let reviewsClassNames = [styles.reviews];

    let selectedProduct = props.products.allProducts.find(product => product.id === props.products.selectedProduct);

    let reviews = selectedProduct.reviews.map((review, index) => {
        let display = index >= visibleReviews ? 'none' : 'flex';
        return <Review review={review} key={review.id} display={display} />;
    })

    if(visibleReviews === 2) {
        reviewsClassNames.push(styles.hideReviews);
    }

    const loadMoreHandler = () => {
        setVisibilityReviews(selectedProduct.reviews.length);
    }

    return (
        <div className={styles.reviewsContainer}>
            <p className={styles.reviewsContainerTitle}>
                {selectedProduct.reviews.length} Reviews for {selectedProduct.name}
            </p>
            <Ratings rating={selectedProduct.rating} />

            <div className={reviewsClassNames.join(' ')}>
                {reviews}
            </div>
            {
                visibleReviews === 2 &&
                <p className={styles.loadMore} onClick={loadMoreHandler}>
                    Load More ({selectedProduct.reviews.length - 2})
                </p>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Reviews);
