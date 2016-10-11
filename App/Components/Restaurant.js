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
});

class Restaurant extends React.Component {

    restaurantProfile(name,
                      promotions,
                      address,
                      city,
                      state,
                      zip,
                      hours,
                      map_url,
                      website_url,
                      menu_url,
                      google_map_url) {
        this.props.navigator.push({
            component: RestaurantProfile,
            title: 'Profile',
            passProps: {
                restaurantName: name,
                promotions: promotions,
                address: address,
                city: city,
                state: state,
                zip: zip,
                hours: hours,
                conciergeName: this.props.conciergeName,
                conciergeID: this.props.conciergeID,
                mapURL: map_url,
                websiteURL: website_url,
                menuURL: menu_url,
                googleMapURL: google_map_url,
            },
            navigationBarHidden: false
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            error: false,
            results: false,
        }

        api.getRestaurants().then((res) => {

                var restaurants = res.map((item, index) => {
                    var length = item.categories.length;
                    var cats = item.categories.map((item, index) => {
                        var divider = ( index < ( length - 1 ) ) ? <Text style={styles.pipe}> | </Text> : false;
                        return (
                            <Text key={index} style={styles.category}>
                                {item}{divider}
                            </Text>
                        )
                    });

                    return (
                        <View key={index}>
                            <View style={defaultStyles.flexWrap}>
                                <View style={defaultStyles.dot}/>
                                <Text style={defaultStyles.restaurants}
                                      onPress={() => this.restaurantProfile(
                                      item.name,
                                      item.promotions,
                                      item.address,
                                      item.city,
                                      item.state,
                                      item.zip,
                                      item.hours,
                                      item.map_image,
                                      item.website_url,
                                      item.menu_url,
                                      item.google_map_url
                                      )}>{item.name}</Text>
                            </View>
                            <View style={styles.categories}>{cats}</View>
                            <View style={defaultStyles.separator}/>
                        </View>
                    )
                });

                let restaurant_wrap =
                    <ScrollView style={defaultStyles.container}>
                        {restaurants}
                    </ScrollView>;

                this.setState({results: restaurant_wrap})
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

module.exports = Restaurant;