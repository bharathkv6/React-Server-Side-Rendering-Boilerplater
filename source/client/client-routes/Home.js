import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../components/Home';
import { loadableReady } from '@loadable/component'

loadableReady(() => {
    ReactDOM.hydrate(<Home />, document.getElementById("root"));
})

