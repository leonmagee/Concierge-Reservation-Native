import React, {Component} from 'react';
import RestaurantProfile from './RestaurantProfile';

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
    buttonText: {
        fontSize: 24,
        color: 'white',
        alignSelf: 'center',
    },
    categories: {
        flexDirection: 'row',
        paddingBottom: 5,
    },
    category: {
        color: '#888',
    },
    pipe: {
        color: '#CCC',
    }
});

class Reservation extends React.Component {

    // reservationProfile(name, promotions) {
    //
    //     this.props.navigator.push({
    //         component: RestaurantProfile,
    //         title: 'Profile',
    //         passProps: {restaurantName: name, promotions: promotions}
    //     })
    // }

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            error: false,
            results: false
        }

        api.getReservations().then((res) => {

                var reservations = res.map((item, index) => {

                    return (
                        <View key={index}>
                            <View style={defaultStyles.flexWrap} >
                                <View style={defaultStyles.dot}/>
                                <Text style={defaultStyles.restaurants}>{item.restaurant}</Text>
                                <Text>{item.customer_name}</Text>
                                <Text>{item.customer_email}</Text>
                                <Text>{item.number_of_patrons}</Text>
                                <Text>{item.reservation}</Text>
                                <Text>{item.date_time}</Text>
                            </View>
                            <View style={defaultStyles.separator}/>
                        </View>
                    )
                });

                this.setState({results: reservations})
                this.setState({isLoading: false})
            }
        );
    }

    render() {

        return (
            <View style={styles.container}>
                {this.state.results}
                <ActivityIndicator
                    animating={this.state.isLoading}
                    color="#111"
                    size="large"></ActivityIndicator>
            </View>
        )
    }

}

module.exports = Reservation;