import React, {Component} from 'react';

import {
    StyleSheet,
    NavigatorIOS
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111111'
    }
});

class RestaurantNav extends Component {

    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
            component: Restaurant,
                title: 'Restaurants',
                passProps: {
                conciergeID: this.props.conciergeID,
                conciergeName: this.props.conciergeName,
            }
        }}/>
        )
    }
}

module.exports = RestaurantNav;
