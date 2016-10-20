import React, {Component} from 'react';
import ErrorMessage from '../Parts/ErrorMessage';
import ActivityButton from '../Parts/ActivityButton';
var defaultStyles = require('../DefaultStyles');

import {
    View,
    Text,
    TouchableHighlight,
    TextInput,
    ActivityIndicator
} from 'react-native';


class LogIn extends React.Component {

    render() {
        return (
            <View>
                <TextInput
                    style={defaultStyles.input}
                    placeholder='Your Concierge or Restaurant ID'
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    onChangeText={this.props.inputAction}
                    autoCorrect={false}
                />
                <ErrorMessage error={this.props.wrongLogin} message="INCORRECT USER ID"/>
                <TouchableHighlight
                    style={[defaultStyles.button, defaultStyles.buttonColorBlue]}
                    onPress={this.props.login}
                    underlayColor="#4EB3A2">
                    <View>
                        <ActivityButton loading={this.props.loading}/>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }


}

module.exports = LogIn