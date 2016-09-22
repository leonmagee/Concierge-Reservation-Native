import React, {Component} from 'react';

/**
 * Styles - not sure how to reuse these through out the app...
 * $color-primary: #08C5B1; // blue green
 * $color-second: #e97c5f; // red
 * $color-third: #EFD14F; // yellow
 */

import {
    StyleSheet,
} from 'react-native';


var defaultStyles = StyleSheet.create({
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FAFAFA',
        alignSelf: 'center',
    },
    button: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: '#08C5B1',
        borderColor: '#08C5B1',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        justifyContent: 'center'
    },
});

module.exports = defaultStyles;