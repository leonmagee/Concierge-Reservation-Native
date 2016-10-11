import React, {Component} from 'react';
var ReactNative = require('react-native'); // better to do it this way???
import HomeLogo from './Home/HomeLogo';
import HomeButtons from './Home/HomeButtons';
import Restaurant from './Restaurant';
import Reservation from './Reservation';
import Login from './Home/LogIn';
var api = require('../Utils/api');

// import {
//     View,
//     WebView,
//     Text,
//     Image,
//     StyleSheet,
// } from 'react-native';

var {
    View,
    WebView,
    Text,
    Image,
    StyleSheet,
} = ReactNative;


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
    logOut: {
        color: '#FAFAFA',
        backgroundColor: 'transparent',
        textAlign: 'center',
        marginTop: 15,
        fontWeight: 'bold',
    },
});

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            error: false,
            mode: false, // this will toggle btw 'concierge' and 'restaurant' - determined by login?
            conciergeID: false,
            //conciergeID: 'aaaaa', // toggle for dev
            conciergeName: false,
            restaurantID: false,
            loggedIn: false,
            //loggedIn: true, // toggle for dev
            wrongLogin: false,
        }
    }

    handleClickRestaurant() {
        this.props.navigator.push({
            title: 'Restaurants',
            component: Restaurant,
            passProps: {
                conciergeID: this.state.conciergeID,
                conciergeName: this.state.conciergeName,
            },
            navigationBarHidden: false
        });
    }

    handleClickReservation() {
        this.props.navigator.push({
            title: 'Reservations',
            component: Reservation,
            passProps: {
                conciergeID: this.state.conciergeID,
            },
            navigationBarHidden: false
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
                        conciergeName: item.name,
                    })
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

        let mainContent = !this.state.loggedIn ?
            <Login
                inputAction={(conciergeID) => this.setState({conciergeID})}
                wrongLogin={this.state.wrongLogin}
                loading={this.state.isLoading}
                login={() => this.logIn()}
            />
            :
            <View>
                <HomeButtons
                    restaurantClick={() => this.handleClickRestaurant()}
                    reservationClick={() => this.handleClickReservation()}
                />
                <View>
                    <Text style={styles.logOut} onPress={this.logOut.bind(this)}>Log Out</Text>
                </View>
            </View>;


        return (
            <Image source={require('../Assets/img/homepage-bg-mobile.png')} style={styles.container}>
                <View style={styles.mainContainer}>
                    <HomeLogo />
                    {mainContent}
                </View>
            </Image>
        )
    }
}

module.exports = Main;