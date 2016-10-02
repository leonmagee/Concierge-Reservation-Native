import React, {Component} from 'react';

import {
    Text,
    View,
    StyleSheet,
    Animated,
    Image,
} from 'react-native';

var styles = StyleSheet.create({
    container: {
        paddingTop: 80,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#FAFAFA',
        flex: 1
    },
})

class Playground extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bounceValue: new Animated.Value(0),
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Working?</Text>
                <Animated.Image                         // Base: Image, Text, View
                    source={{uri: 'https://i.imgur.com/XMKOH81.jpg'}}
                    style={{
          flex: 1,
          transform: [                        // `transform` is an ordered array
            {scale: this.state.bounceValue},  // Map `bounceValue` to `scale`
          ]
        }}
                />
            </View>
        );
    }

    componentDidMount() {
        this.state.bounceValue.setValue(1.5);     // Start large
        Animated.spring(                          // Base: spring, decay, timing
            this.state.bounceValue,                 // Animate `bounceValue`
            {
                toValue: 0.8,                         // Animate to smaller size
                friction: 0.9,                          // Bouncier spring
            }
        ).start();                                // Start the animation
    }
}

module.exports = Playground;

