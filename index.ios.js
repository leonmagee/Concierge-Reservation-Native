import React, {Component} from 'react';
import Main from './App/Components/Main'

import {
    AppRegistry,
    StyleSheet,
    NavigatorIOS
} from 'react-native';

const styles = StyleSheet.create({
    /**
     * This is the container of everything, not just the nav
     */
    container: {
        flex: 1,
        backgroundColor: '#111111'
    }
});

class ConciergeReservation extends Component {

    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    component: Main,
                    title: 'Home',
                }}
                navigationBarHidden={true}
            />
        )
    }
}

AppRegistry.registerComponent('ConciergeReservation', () => ConciergeReservation);

