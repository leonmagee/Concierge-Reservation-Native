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
    },
    flexWrap: {

    }
});

class Reservation extends React.Component {

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
                            <View style={styles.flexWrap} >
                                <View style={defaultStyles.dot}/>
                                <Text style={defaultStyles.restaurants}>{item.restaurant}</Text>
                                <Text>{item.customer_name}</Text>
                                <Text>{item.customer_email}</Text>
                                <Text>{item.concierge}</Text>
                                <Text>{item.concierge_id}</Text>
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
            <ScrollView style={styles.container}>
                {this.state.results}
                <ActivityIndicator
                    animating={this.state.isLoading}
                    color="#111"
                    size="large"></ActivityIndicator>
            </ScrollView>
        )
    }

}

module.exports = Reservation;