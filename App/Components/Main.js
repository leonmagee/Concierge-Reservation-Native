import React, {Component} from 'react';
import Restaurant from './Restaurant';
import Reservation from './Reservation';
import Tester from './Tester';
import SuccessMessage from './SuccessMessage';
import Playground from './Playground';

var api = require('../Utils/api');
var defaultStyles = require('./DefaultStyles');

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
    logoWrap: {
        marginBottom: 50,
        //alignItems: 'stretch'
    },
    logoImage: {
        // this is not responsive yet - I need to fit it to the container???
        //width: 250,
        //height: 160,
        width: 300,
        height: 192,
        //flex: 1
    },
    buttonWrap: {
        backgroundColor: '#222',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 8,
        borderRadius: 5,
    }
});

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            isLoading: false,
            error: false,
        }
    }

    handleClickRestaurant() {
        this.props.navigator.push({
            title: 'Restaurants',
            component: Restaurant,
        });
    }

    handleClickReservation() {
        this.props.navigator.push({
            title: 'Reservations',
            component: Reservation,
        });
    }

    // _handleNavigationRequest() {
    //     this.props.navigator.push({
    //         component: Playground,
    //         title: 'Genius',
    //         passProps: { myProp: 'genius' },
    //     });
    // }

    handleClickTesting() {
        this.props.navigator.push({
            title: 'Success',
            component: SuccessMessage,
            passProps: {
                name: 'test name',
                restaurant: 'test restaurant',
            },
            // leftButtonTitle: 'Home',
            // onLeftButtonPress: () => this._handleNavigationRequest(),
        })
    }

    handleClickAnimations() {
        this.props.navigator.push({
            title: 'Animations',
            component: Playground,
        })
    }

    render() {
        console.log('navigator: ', this.props.navigator );

        return (
            <Image source={require('../Assets/img/homepage-bg-mobile.png')} style={styles.container}>
                <View style={styles.mainContainer}>
                    <View style={styles.logoWrap}>
                        <Image style={styles.logoImage} initWidth="250" initHeight="160"
                               source={require('../Assets/img/logo.png')}></Image>
                    </View>
                    <View style={styles.buttonWrap}>
                        <TouchableHighlight
                            style={defaultStyles.button}
                            onPress={this.handleClickRestaurant.bind(this)}
                            underlayColor="white">
                            <Text style={defaultStyles.buttonText}>View Restaurants</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={defaultStyles.button2}
                            onPress={this.handleClickReservation.bind(this)}
                            underlayColor="white">
                            <Text style={defaultStyles.buttonText}>Your Reservations</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={defaultStyles.button3}
                            onPress={this.handleClickTesting.bind(this)}
                            underlayColor="white">
                            <Text style={defaultStyles.buttonText}>Misc Tester</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={defaultStyles.button}
                            onPress={this.handleClickAnimations.bind(this)}
                            underlayColor="white">
                            <Text style={defaultStyles.buttonText}>Animations</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Image>
        )
    }
}

module.exports = Main;