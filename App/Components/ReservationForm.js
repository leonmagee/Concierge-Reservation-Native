import React, {Component} from 'react';

import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
    ActivityIndicator
} from 'react-native';

var styles = StyleSheet.create({
    container: {
        padding: 15,
        marginTop: 60,
        backgroundColor: '#FAFAFA',
        flex: 1
    },
    text: {
        color: 'blue'
    }
});

class ReservationForm extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Input elements go here...</Text>
            </View>
        )
    }
}

module.exports = ReservationForm;