/**
 * Import React Components
 */
import React, {Component} from 'react';
var defaultStyles = require('./../DefaultStyles');

import {
    View,
    Text,
    TouchableHighlight,
    TextInput,
    ActivityIndicator
} from 'react-native';


class LogIn extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     username: '',
        //     isLoading: false,
        //     error: false,
        //     mode: false, // toggle btw 'concierge' and 'restaurant'
        //     //conciergeID: 'aaaaa', // toggle for dev - secret id now
        //     conciergeID: false,
        //     restaurantID: false,
        //     loggedIn: false, // toggle for dev
        //     wrongLogin: false,
        //     //loggedIn: true,
        // }
    }

    render() {

        let loginButton = !this.props.isLoading ?
            <Text style={defaultStyles.buttonText}>Log In</Text> :
            <ActivityIndicator
                animating={this.props.isLoading}
                color="#FFF"
                size="small"></ActivityIndicator>;

        let errorMessage = this.props.wrongLogin ?
            <View><Text style={styles.errorMessage}>INCORRECT USER ID</Text></View> :
            <View></View>;

        return (
            <View>
                <TextInput
                    style={defaultStyles.input}
                    placeholder='Your Concierge or Restaurant ID'
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    onChangeText={(conciergeID) => this.setState({conciergeID})}
                    autoCorrect={false}
                />
                {errorMessage}
                <TouchableHighlight
                    style={defaultStyles.button}
                    onPress={this.props.logInClick()}
                    underlayColor="white">
                    <View>
                        {loginButton}
                    </View>
                </TouchableHighlight>
            </View>
        )
    }


}

module.exports = LogIn