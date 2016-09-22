import React, {Component} from 'react';
var api = require('../Utils/api');
import RestaurantProfile from './RestaurantProfile';

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
    restaurantWrap: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    restaurants: {
        fontSize: 19,
        padding: 10,
        color: '#222',
        fontWeight: 'bold',
    },
    dot: {
        backgroundColor: '#08C5B1',
        borderRadius: 6,
        height: 12,
        width: 12,
        marginRight: 4,
    },
    separator: {
        height: 1,
        backgroundColor: '#DDD',
    },
});

class Restaurant extends React.Component {

    restaurantProfile(name, promotions) {
        console.log('restaurant was clicked')
        this.props.navigator.push({
            component: RestaurantProfile,
            title: 'Profile',
            passProps: {restaurantName: name, promotions: promotions}
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            error: false,
            results: false
        }

        api.getRestaurants().then((res) => {
                var restaurants = res.map((item, index) => {
                    console.log(item.promotions);
                    return (
                        <View key={index}>
                            <View style={styles.restaurantWrap} >
                                <View style={styles.dot}/>
                                <Text style={styles.restaurants} onPress={() => this.restaurantProfile(item.name, item.promotions)}>{item.name}</Text>
                            </View>
                            <View style={styles.separator}/>
                        </View>
                    )
                });

                this.setState({results: restaurants})
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
                    color="#EEE"
                    size="large"></ActivityIndicator>
            </View>
        )
    }

}

module.exports = Restaurant;