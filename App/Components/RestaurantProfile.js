import React, {Component} from 'react';
var api = require('../Utils/api');
import ReservationForm from './ReservationForm';

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
        padding: 15,
        marginTop: 60,
        backgroundColor: '#FAFAFA',
        flex: 1
    },
    title: {
        fontSize: 25,
        padding: 11,
        textAlign: 'center',
        color: '#222'
    },
    subTitle: {
        fontSize: 20,
        padding: 9,
        textAlign: 'center',
        color: '#444'
    },
    promotions: {
        color: '#222',
        fontSize: 16,
        padding: 8
    },
    buttonText: {
        fontSize: 24,
        color: '#222',
        alignSelf: 'center'
    },
});

class RestaurantProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            error: false,
            results: false,
            name: props.restaurantName,
            promotions: props.promotions
        }
    }

    processDiscount() {
        // try calling this with fat arrow function - won't need to bind 'this'?
        console.log('lets make a reservation!');
        this.props.navigator.push({
            component: ReservationForm,
            title: 'Reservation',
            passProps: 'some props',
        })
    }

    render() {

        var restaurantPromotions = this.state.promotions.map((item, index) => {
            return (
                <View key={index}>
                    <Text style={styles.promotions}>{item}</Text>
                </View>
            )
        })
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.state.name}</Text>
                <Text style={styles.subTitle}>Promotions</Text>
                {restaurantPromotions}
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.processDiscount.bind(this)}
                    underlayColor="white">
                    <Text style={styles.buttonText}>Reservation | Discount</Text>
                </TouchableHighlight>
            </View>
        )
    }

}

module.exports = RestaurantProfile;