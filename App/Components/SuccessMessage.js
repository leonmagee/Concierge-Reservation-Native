import React, {Component} from 'react';

var api = require('../Utils/api');
//var defaultStyles = require('./DefaultStyles');

import {
    Text,
    View,
    StyleSheet,
    Animated,
} from 'react-native';

var styles = StyleSheet.create({
    container: {
        paddingTop: 70,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#FAFAFA',
        flex: 1
    },
    success: {
        fontSize: 40,
        color: '#08C5B1',
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 10,
    },
    successText: {
        fontSize: 20,
        color: '#333',
    }
});

class SuccessMessage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            error: false,
            name: props.name,
            restaurant: props.restaurant,
            bounceValue: new Animated.Value(0),
        }
    }

    componentDidMount() {
        this.state.bounceValue.setValue(1.3);     // Start large
        Animated.spring(                          // Base: spring, decay, timing
            this.state.bounceValue,                 // Animate `bounceValue`
            {
                toValue: 1,                         // Animate to smaller size
                friction: 1,                          // Bouncier spring
            }
        ).start();                                // Start the animation
    }

    render() {

        return (
            <View style={styles.container}>
                <Animated.Text style={{
                fontSize: 35,
                color: '#08C5B1',
                fontWeight: 'bold',
                marginTop: 15,
                marginBottom: 10,
                transform: [
                    {scale: this.state.bounceValue},
                ],
                textAlign: 'center',
                }}>SUCCESS!</Animated.Text>
                <Text style={styles.successText}>An email has been sent to {this.state.name} with a promotional offer
                    from {this.state.restaurant}.</Text>
            </View>
        )
    }
}

module.exports = SuccessMessage;