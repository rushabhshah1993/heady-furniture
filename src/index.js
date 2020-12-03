import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import 
{ faSearch, faHeart, faShoppingBag,
    faHome, faCaretRight, faStar, 
    faShippingFast, faUndo, faCheck, 
    faPlayCircle, faArrowCircleDown
} from '@fortawesome/free-solid-svg-icons';

import Main from './pages/Main/Main';

import store from './store/store';

library.add(
    faSearch, faHeart, faShoppingBag, 
    faHome, faCaretRight, faFacebookF,
    faTwitter, faPinterest, faStar,
    faShippingFast, faUndo, faCheck,
    faPlayCircle, faArrowCircleDown
);

const main = (
    <Provider store={store}>
        <Main />
    </Provider>
)

ReactDOM.render(
    main,
    document.getElementById('root')
)
