import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import 
{ faSearch, faHeart, faShoppingBag,
    faHome, faCaretRight
} from '@fortawesome/free-solid-svg-icons';

import Main from './pages/Main/Main';

import store from './store/store';

library.add(
    faSearch, faHeart, faShoppingBag, 
    faHome, faCaretRight
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
