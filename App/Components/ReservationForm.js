import React, {Component} from 'react';

import {
    Text,
    View,
    TextInput,
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
    input: {
        height: 40,
        borderColor: '#DDD',
        borderWidth: 1,
        backgroundColor: '#F7F7F7',
        borderRadius: 5,
        paddingLeft: 10,
    },
    label: {
        fontWeight: 'bold',
        color: '#111',
        marginTop: 10,
        marginBottom: 4,
    }
});

class ReservationForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            error: false,
            name: '',
            email: '',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>Customer Name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(name) => this.setState({name})}
                />
                <Text>{this.state.name}</Text>
                <Text style={styles.label}>Customer Email</Text>
                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={(email) => this.setState({email})}
                />
                <Text>{this.state.email}</Text>
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.processDiscount.bind(this)}
                    underlayColor="white">
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

module.exports = ReservationForm;