import React, {Component} from 'react';
import ReservationForm from './ReservationForm';

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
        padding: 15,
        marginTop: 55,
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
        fontSize: 18,
        marginTop: 20,
        marginBottom: 4,
        fontWeight: 'bold',
        color: '#333'
    },
    promotions: {
        color: '#222',
        fontSize: 16,
        padding: 8
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
        var myprops = {name: this.state.name, car: 'honda'};
        this.props.navigator.push({
            component: ReservationForm,
            title: 'Coupon / Reservation',
            passProps: myprops
        })
    }

    render() {

        var restaurantPromotions = this.state.promotions.map((item, index) => {
            return (
                <View key={index}>
                    <View style={defaultStyles.flexWrap}>
                        <View style={defaultStyles.dot2}/>
                        <Text style={styles.promotions}>{item}</Text>
                    </View>
                    <View style={defaultStyles.separator2}/>
                </View>
            )
        })
        return (
            <View style={styles.container}>
                <View style={defaultStyles.flexWrap}>
                    <View style={defaultStyles.dot}/>
                    <Text style={defaultStyles.restaurants}>{this.state.name}</Text>
                </View>
                <View style={defaultStyles.separator}/>

                <Text style={styles.subTitle}>Discounts & Promotions</Text>
                <View style={defaultStyles.separator2}/>
                {restaurantPromotions}
                <TouchableHighlight
                    style={defaultStyles.button}
                    onPress={this.processDiscount.bind(this)}
                    underlayColor="white">
                    <Text style={defaultStyles.buttonText}>Coupon / Reservation</Text>
                </TouchableHighlight>
            </View>
        )
    }

}

module.exports = RestaurantProfile;