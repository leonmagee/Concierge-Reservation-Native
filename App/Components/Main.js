import React, {Component} from 'react';
import Restaurant from './Restaurant';
var api = require('../Utils/api');

/**
 * Styles - not sure how to reuse these through out the app...
 * $color-primary: #08C5B1; // blue green
 * $color-second: #e97c5f; // red
 * $color-third: #EFD14F; // yellow
 */

import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight
} from 'react-native';


var styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
    },
    mainContainer: {
        flex: 1,
        padding: 30,
        marginTop: 35,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FAFAFA',
        alignSelf: 'center',
    },
    button: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: '#08C5B1',
        borderColor: '#08C5B1',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        //alignSelf: 'stretch',
        justifyContent: 'center'
    },
    logoWrap: {
        marginBottom: 50,
        //alignItems: 'stretch'
    },
    logo_image: {
        // this is not responsive yet - I need to fit it to the container???
        //width: 250,
        //height: 160,
        width: 300,
        height: 192,
        //flex: 1
    }
});

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            isLoading: false,
            error: false
        }
    }

    handleClickRestaurant() {
        this.props.navigator.push({
            title: 'Restaurants',
            component: Restaurant
        });
    }

    render() {
        return (
            <Image source={require('../Assets/img/homepage-bg-mobile.png')} style={styles.container}>
                <View style={styles.mainContainer}>
                    <View style={styles.logoWrap}>
                        <Image style={styles.logo_image} initWidth="250" initHeight="160"
                               source={require('../Assets/img/logo.png')}></Image>
                    </View>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={this.handleClickRestaurant.bind(this)}
                        underlayColor="white">
                        <Text style={styles.buttonText}>View Restaurants</Text>
                    </TouchableHighlight>
                </View>
            </Image>
        )
    }
}

module.exports = Main;