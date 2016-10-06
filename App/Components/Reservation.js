import React, {Component} from 'react';
import RestaurantProfile from './RestaurantProfile';

var api = require('../Utils/api');
var defaultStyles = require('./DefaultStyles');

import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Image,
    TouchableHighlight,
    ActivityIndicator
} from 'react-native';

var styles = StyleSheet.create({
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
    },
    resDetail: {
        marginBottom: 8,
    }
});

class Reservation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            error: false,
            results: false,
            conciergeID: props.conciergeID,
        }

        api.getReservations().then((res) => {

                var reservations = res.map((item, index) => {

                    if (this.state.conciergeID === item.concierge_id) {

                        return (
                            <View key={index}>
                                <View style={defaultStyles.flexWrap}>
                                    <View style={defaultStyles.dot}/>
                                    <Text style={defaultStyles.restaurants}>{item.restaurant}</Text>
                                </View>
                                <View>
                                    <Text style={styles.resDetail}>Customer: {item.customer_name}</Text>
                                    <Text style={styles.resDetail}>Email: {item.customer_email}</Text>
                                </View>
                                <View style={defaultStyles.separator}/>
                            </View>
                        )
                    }


                });

                let reservation_wrap =
                    <ScrollView style={defaultStyles.container}>
                        {reservations}
                    </ScrollView>;

                this.setState({results: reservation_wrap})
                this.setState({isLoading: false})
            }
        );
    }

    render() {

        return (
            <View style={defaultStyles.outerWrap}>
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