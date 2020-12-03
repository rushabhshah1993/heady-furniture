import React from 'react';

import styles from './productInfo.scss';

import Header from './Header/Header';
import AdditionalInfo from './AdditionalInfo/AdditionalInfo';
import Policies from './Policies/Policies';
import Colors from './Colors/Colors';

const ProductInfo = props => {
    console.log(props);
    let product = props.product;

    return (
        <div className={styles.productInfoContainer}>
            <Header
                name={product.name}
                rating={product.rating}
                reviewsCount={product.reviews.length}
                currency={product.currency}
                mrp={product.mrp}
                discountPrice={product.discountPrice}
            />
            <AdditionalInfo info={product.additionalInfo} />
            <Policies policies={product.policies} />
            <Colors colors={product.colors} />
        </div>
    )
}

export default ProductInfo;
