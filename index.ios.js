import React, {Component} from 'react';
import Main from './App/Components/Main'
import AnimationTest from './App/Components/AnimationTest'

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
                    //component: AnimationTest,
                    title: 'Home',
                }}
                navigationBarHidden={true}
            />
        )
    }
}

AppRegistry.registerComponent('ConciergeReservation', () => ConciergeReservation);

