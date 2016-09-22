import React, {Component} from 'react';
import Restaurant from './Restaurant';
import Concierge from './Concierge';
var api = require('../Utils/api');

/**
 * Styles - not sure how to reuse these through out the app...
 * $color-primary: #08C5B1; // blue green
 * $color-second: #e97c5f; // red
 * $color-third: #EFD14F; // yellow
 */

import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight,
    ActivityIndicator
} from 'react-native';


var styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 30,
        marginTop: 65,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'transparent'
    },
    searchInput: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white'
    },
    buttonText: {
        fontSize: 18,
        color: '#111',
        alignSelf: 'center'
    },
    button: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null,
    },
});

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            isLoading: false,
            error: false
        }
    }

    handleClickConcierge() {
        this.props.navigator.push({
            title: 'Concierge',
            component: Concierge,
            passProps: {userInfo: 'infoxxx'}
        });
    }

    handleClickRestaurant() {
        this.props.navigator.push({
            title: 'Restaurants',
            component: Restaurant,
            passProps: {userInfo: 'infoxxx'}
        });
    }

    render() {
        return (
            <Image source={require('../Assets/img/homepage-bg-mobile.png')} style={styles.container}>
                <View style={styles.mainContainer}>
                    <Text style={styles.title}>Choose Service</Text>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={this.handleClickConcierge.bind(this)}
                        underlayColor="white">
                        <Text style={styles.buttonText}>Concierge</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={this.handleClickRestaurant.bind(this)}
                        underlayColor="white">
                        <Text style={styles.buttonText}>Restaurant</Text>
                    </TouchableHighlight>
                    <ActivityIndicator
                        animating={this.state.isLoading}
                        color="#111"
                        size="large"></ActivityIndicator>
                </View>
            </Image>
        )
    }
}

module.exports = Main;