import React, {Component} from 'react';
// import RestaurantProfile from './RestaurantProfile';
//
// var api = require('../Utils/api');
// var defaultStyles = require('./DefaultStyles');
//
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableHighlight,
    ActivityIndicator
} from 'react-native';

var Mailer = require('NativeModules').RNMail;

var styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
    },
    button: {
        color: 'blue',
    }
});

class SendMail extends React.Component {

    handleHelp() {
        Mailer.mail({
            subject: 'mail awesome tester',
            recipients: ['leonmagee33@gmail.com'],
            ccRecipients: ['leonmagee@hotmail.com'],
            bccRecipients: ['leonm@hji.mail'],
            body: '',
            isHTML: true, // iOS only, exclude if false
            attachment: {
                path: '',  // The absolute path of the file from which to read data.
                type: '',   // Mime Type: jpg, png, doc, ppt, html, pdf
                name: '',   // Optional: Custom filename for attachment
            }
        }, (error, event) => {
            if(error) {
                AlertIOS.alert('Error', 'Could not send mail. Please send a mail to support@example.com');
            }
        });
    }
    render() {
        return (
            <TouchableHighlight
                onPress={row.handleHelp}
                underlayColor="#f7f7f7">
                <Text style={styles.button}>Send Mail!</Text>
            </TouchableHighlight>
        );
    }
}

module.exports = SendMail;
