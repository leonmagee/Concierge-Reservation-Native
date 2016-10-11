import React, {Component} from 'react';
var defaultStyles = require('../DefaultStyles');

import {
    Text,
    ActivityIndicator
} from 'react-native';

class ActivityButton extends React.Component {

    render() {

        if ( this.props.loading ) {
            return (
                <ActivityIndicator
                    animating={this.props.loading}
                    color="#FFF"
                    size="small"></ActivityIndicator>
            )
        } else {
            return (
                <Text style={defaultStyles.buttonText}>Log In</Text>
            )
        }
    }
}

module.exports = ActivityButton;