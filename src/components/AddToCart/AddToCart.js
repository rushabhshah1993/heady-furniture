import React, { useState } from 'react';
import { connect } from 'react-redux';

import styles from './addToCart.scss';

import { addToCart } from './../../store/actions/cartActions';

const AddToCart = props => {
    const [count, changeCount] = useState(0);

    const decreaseCountHandler = () => {
        if(count === 0) return;
        else changeCount(count-1);
    }

    const increaseCountHandler = () => {
        changeCount(count+1);
    }

    const addToCartHandler = () => {
        let prodObj = {
            productId: props.products.selectedProduct,
            quantity: count
        }

        if(count > 0) props.onAddCart(prodObj);        
    }

    return (
        <div className={styles.addToCartContainer}>
            <div className={styles.counter}>
                <span 
                    className={styles.lessBtn}
                    onClick={decreaseCountHandler}>
                        -
                </span>
                <span className={styles.count}>{count}</span>
                <span 
                    className={styles.moreBtn}
                    onClick={increaseCountHandler}>
                        +
                </span>
            </div>
            <div 
                className={styles.addCartBtn}
                onClick={addToCartHandler}>
                Add To Cart
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
        products: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddCart: products => dispatch(addToCart(products))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);
