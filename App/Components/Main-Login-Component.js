/**
 * Import React Components
 */
import React, {Component} from 'react';
import Login from './Home/LogIn';
import Restaurant from './Restaurant';
import Reservation from './Reservation';
var api = require('../Utils/api');
var defaultStyles = require('./DefaultStyles');

import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight,
    TextInput,
    ActivityIndicator
} from 'react-native';

/**
 * Unique Styles
 */
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
    },
    logoImage: { // before and after login - keep the same?
        width: 300,
        height: 192,
    },
    buttonWrap: {
        backgroundColor: '#222',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 8,
        borderRadius: 5,
    },
    logOut: {
        color: '#FAFAFA',
        backgroundColor: 'transparent',
        textAlign: 'center',
        marginTop: 15,
        fontWeight: 'bold',
    },
    errorMessage: {
        padding: 8,
        backgroundColor: '#E97C5F',
        color: '#FFF',
        textAlign: 'center',
        marginTop: 8,
        borderRadius: 5,
        fontWeight: 'bold',
    }
});

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            isLoading: false,
            error: false,
            mode: false, // toggle btw 'concierge' and 'restaurant'
            //conciergeID: 'aaaaa', // toggle for dev - secret id now
            conciergeID: false,
            restaurantID: false,
            loggedIn: false, // toggle for dev
            wrongLogin: false,
            //loggedIn: true,
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
            passProps: {
                conciergeID: this.state.conciergeID,
            }
        });
    }

    logOut() {
        this.setState({
            loggedIn: false,
            wrongLogin: false,
        })
    }

    logIn() {
        /**
         * Post to rest api to get authenticated response
         */
        this.setState({
            isLoading: true,
            wrongLogin: false,
        })

        api.postUsers().then((res) => {
            for (var item of res) {
                if (this.state.conciergeID === item.login_id) {
                    this.setState({
                        loggedIn: true,
                        conciergeID: item.secret_id,
                        mode: item.mode,
                    })
                    console.log(this.state);
                    break;
                }
                this.setState({
                    wrongLogin: true,
                })
            }

            this.setState({
                isLoading: false,
            })
        })
    }

    render() {
        let loginButton = !this.state.isLoading ?
            <Text style={defaultStyles.buttonText}>Log In</Text> :
            <ActivityIndicator
                animating={this.state.isLoading}
                color="#FFF"
                size="small"></ActivityIndicator>;

        let errorMessage = this.state.wrongLogin ?
            <View><Text style={styles.errorMessage}>INCORRECT USER ID</Text></View> :
            <View></View>;

        let mainContent = !this.state.loggedIn ?

            <Login
                conciergeID={this.state.conciergeID}
                logInClick={this.logIn.bind(this)}
                wrongLogin={this.state.wrongLogin}
            />

            :
            <View>
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
                </View>
                <View>
                    <Text style={styles.logOut} onPress={this.logOut.bind(this)}>Log Out</Text>
                </View>
            </View>;


        return (
            <Image source={require('../Assets/img/homepage-bg-mobile.png')} style={styles.container}>
                <View style={styles.mainContainer}>
                    <View style={styles.logoWrap}>
                        <Image style={styles.logoImage} initWidth="250" initHeight="160"
                               source={require('../Assets/img/logo.png')}></Image>
                    </View>
                    {mainContent}
                </View>
            </Image>
        )
    }
}

module.exports = Main;