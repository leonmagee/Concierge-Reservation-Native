import React, {Component} from 'react';

/**
 * Styles - not sure how to reuse these through out the app...
 * $color-primary: #08C5B1; // blue green
 * $color-second: #E97C5F; // red
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
    button2: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: '#E97C5F',
        borderColor: '#E97C5F',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        justifyContent: 'center'
    },
    button3: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: '#EFD14F',
        borderColor: '#EFD14F',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        justifyContent: 'center'
    },
    flexWrap: {
        //flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    restaurants: {
        fontSize: 19,
        padding: 10,
        color: '#222',
        fontWeight: 'bold',
    },
    dot: {
        backgroundColor: '#08C5B1',
        borderRadius: 6,
        height: 12,
        width: 12,
        marginRight: 4,
    },
    dot2: {
        backgroundColor: '#e97c5f',
        borderRadius: 5,
        height: 10,
        width: 10,
        marginRight: 4,
    },
    separator: {
        height: 1,
        backgroundColor: '#DDD',
    },
    separator2: {
        height: 0.5,
        backgroundColor: '#DEDEDE',
    },
});

module.exports = defaultStyles;