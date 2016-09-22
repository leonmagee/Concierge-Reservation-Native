import React, {Component} from 'react';
import Main from './App/Components/Main'

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS
} from 'react-native';

const styles = StyleSheet.create({
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
                    title: 'Concierge Reservation',
                    passProps: {myProp: 'foo' }
            }}/>
        )
    }
}

AppRegistry.registerComponent('ConciergeReservation', () => ConciergeReservation);
