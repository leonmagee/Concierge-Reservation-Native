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
        backgroundColor: '#222',
        flex: 1
    },
    image: {
        height: 350
    },
    buttonText: {
        fontSize: 24,
        color: 'white',
        alignSelf: 'center'
    },
    restaurants: {
        fontSize: 24,
        //flex: 1,
        padding: 10,
        backgroundColor: '#F7F7F7',
        textAlign: 'center'
        // flexDirection: 'row',
        // alignSelf: 'stretch',
        // justifyContent: 'center',
        // flex: 1
    },
    separator: {
        height: 1,
        backgroundColor: '#DDD'
    }
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
                            <Text onPress={() => this.restaurantProfile(item.name, item.promotions)}
                                  style={styles.restaurants}>{item.name}</Text>
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