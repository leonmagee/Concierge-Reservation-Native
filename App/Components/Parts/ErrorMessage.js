import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

let styles = StyleSheet.create({
    errorMessage: {
        padding: 8,
        backgroundColor: '#E97C5F',
        color: '#FFF',
        textAlign: 'center',
        marginTop: 8,
        borderRadius: 5,
        fontWeight: 'bold',
    }
})

class ErrorMessage extends React.Component {

    render() {

        if ( this.props.error ) {
            return (
                <View><Text style={styles.errorMessage}>{this.props.message}</Text></View>
            )
        } else {
            return (
                <View></View>
            )
        }
    }
}

module.exports = ErrorMessage;