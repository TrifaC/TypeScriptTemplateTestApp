/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './react/src/App';
import {name as appName} from './app.json';
import React from 'react';

class Index extends React.Component {
    render() {
        return (<App />);
    }
}

AppRegistry.registerComponent(appName, () => Index);
