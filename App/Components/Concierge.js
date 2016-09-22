import React, {Component} from 'react';

import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableHighlight
} from 'react-native';

var styles = StyleSheet.create({
    container: {
        marginTop: 65,
        flex: 1
    },
    image: {
        height: 350
    },
    buttonText: {
        fontSize: 24,
        color: 'white',
        alignSelf: 'center'
    }
});

class Concierge extends React.Component {

    makeBackground(btn) {

        var obj = {
            flexDirection: 'row',
            alignSelf: 'stretch',
            justifyContent: 'center',
            flex: 1
        }

        if (btn === 0) {
            obj.backgroundColor = '#48BBEC'
        } else if (btn === 1) {
            obj.backgroundColor = '#E77AAE'
        } else if (btn === 2) {
            obj.backgroundColor = '#758BF4'
        }

        return obj;
    }

    goToProfile() {
        console.log('going to profile page');
        this.props.navigator.push({
            component: Profile,
            title: 'Profile Page',
            passProps: {userInfo: this.props.userInfo}
        })
    }

    goToRepos() {
        console.log('going to repos page');
    }

    goToNotes() {
        console.log('going to notes page');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Concierge Page!!!</Text>
            </View>
        )
    }

}

module.exports = Concierge;