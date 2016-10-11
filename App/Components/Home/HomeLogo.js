import React, {Component} from 'react';

import {
    View,
    Image,
    StyleSheet,
} from 'react-native';

let styles = StyleSheet.create({
    logoWrap: {
        flex: 1,
        height: 350,
    },
    logoImage: {
        resizeMode: 'contain',
        width: null,
    },
})

class HomeLogo extends React.Component {

    render() {

        return (
            <View style={styles.logoWrap}>
                <Image
                    style={styles.logoImage}
                    source={require('../../Assets/img/logo.png')}
                />
            </View>
        )
    }

}

module.exports = HomeLogo;