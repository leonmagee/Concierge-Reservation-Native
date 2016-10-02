import React, {Component} from 'react';
//import RestaurantProfile from './RestaurantProfile';

var api = require('../Utils/api');
var defaultStyles = require('./DefaultStyles');

import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableHighlight,
    ActivityIndicator
} from 'react-native';

var styles = StyleSheet.create({
    container: {
        paddingTop: 80,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#FAFAFA',
        flex: 1
    },
});

class Tester extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        }
    }

    handleEmailClick() {
        console.log( 'button has been clicked...');
        var restaurant = 'nippon sushi';
        var name = 'leon magee';
        var concierge = 'dennis scotus';
        api.sendPromotionEmail(restaurant, name, concierge ).then((res) => {
            console.log(res);
        });
    }

    render() {

        return (
            <View style={styles.container}>
                <Text>Testing Page - Email</Text>
                <TouchableHighlight
                    style={defaultStyles.button3}
                    onPress={this.handleEmailClick.bind(this)}
                    underlayColor="white">
                    <Text style={defaultStyles.buttonText}>Send Email</Text>
                </TouchableHighlight>
            </View>
        )
    }

}

module.exports = Tester;