import React, {Component} from 'react';
var defaultStyles = require('../DefaultStyles');

import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';

let styles = StyleSheet.create({
    buttonWrap: {
        backgroundColor:'rgba(0,0,0,0.6)',
        //backgroundColor:'rgba(255,255,255,0.2)',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 8,
        borderRadius: 5,
    },
})

class HomeButtons extends React.Component {

    render() {

        return (
            <View style={styles.buttonWrap}>
                <TouchableHighlight
                    style={[defaultStyles.button,defaultStyles.buttonColorBlue]}
                    onPress={this.props.restaurantClick}
                    underlayColor="#4EB3A2">
                    <Text style={defaultStyles.buttonText}>View Restaurants</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={[defaultStyles.button, defaultStyles.buttonColorRed]}
                    onPress={this.props.reservationClick}
                    underlayColor="#EF765E">
                    <Text style={defaultStyles.buttonText}>Your Reservations</Text>
                </TouchableHighlight>
            </View>
        )
    }

}

module.exports = HomeButtons;