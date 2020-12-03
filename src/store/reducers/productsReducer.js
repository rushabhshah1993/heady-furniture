import React from 'react';
import { faShippingFast, faUndo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const initalState = {
    allProducts: [
        {
            id: '001',
            name: 'Nudie Extendable Sofa for 3 persons.',
            rating: 4,
            currency: '$',
            mrp: 169,
            discountPrice: 149,
            colors: [
                {
                    color: '#DAD5AB',
                    selected: false
                },
                {
                    color: '#1A1A1A',
                    selected: true
                },
                {
                    color: '#FFFFFF',
                    selected: false
                }
            ],
            policies: {
                sameDayDispatch: true,
                return30Days: true
            },
            policies: [
                {
                    id: 'sameDayDispatch',
                    text: 'Same Day Dispatch',
                    icon: <FontAwesomeIcon icon={faShippingFast} />
                },
                {
                    id: 'return30days',
                    text: 'Easy-30 Day Return Policy',
                    icon: <FontAwesomeIcon icon={faUndo} />
                }
            ],
            additionalInfo: [
                {
                    id: 'assemblyType',
                    name: 'Assembly',
                    value: 'Carpenter Assembly'
                },
                {
                    id: 'warranty',
                    name: 'Warranty',
                    value: '12 Months Warranty'
                }
            ],
            reviews: [
                {
                    username: 'John Doe',
                    rating: 4,
                    date: '08/28/2020',
                    title: 'Excellent',
                    desc: 'Lorem Ipsum '
                },
                {
                    username: 'Jane Dias',
                    rating: 3,
                    date: '05/10/2018',
                    title: 'Good Product',
                    desc: 'Lorem Ipsum '
                },
                {
                    username: 'John Stan',
                    rating: 5,
                    date: '09/01/2016',
                    title: 'Excellent',
                    desc: 'Lorem Ipsum '
                },
                {
                    username: 'John Doe',
                    rating: 4,
                    date: '08/28/2016',
                    title: 'Excellent',
                    desc: 'Lorem Ipsum '
                },
                {
                    username: 'John Doe',
                    rating: 4,
                    date: '08/28/2016',
                    title: 'Excellent',
                    desc: 'Lorem Ipsum '
                }
            ]
        }
    ],
    selectedProduct: "001"
}

const reducer = (state=initalState, action) => {
    switch(action.type) {
        default: return state;
    }
}

export default reducer;
