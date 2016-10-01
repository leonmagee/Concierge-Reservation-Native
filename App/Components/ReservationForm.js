import React, {Component} from 'react';

var api = require('../Utils/api');
var defaultStyles = require('./DefaultStyles');

import {
    Text,
    View,
    ScrollView,
    TextInput,
    StyleSheet,
    TouchableHighlight,
    ActivityIndicator,
    Switch,
    DatePickerIOS
} from 'react-native';

var styles = StyleSheet.create({
    container: {
        padding: 15,
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
        marginTop: 5,
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
            restaurant: props.name,
            patrons: '',
            is_reservation: false,
            time: false,
            date: new Date(),
            //timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
        }
    }

    submitForm() {

        var reservation_data = {
            title: 'Reservation for ' + this.state.restaurant + ' by ' + this.state.name,
            status: 'publish',
        }

        if ( ! this.state.is_reservation ) {
            this.setState({
                date: '',
            })
        }

        var reservation_data_meta = {
            fields: {
                customer_name: this.state.name,
                customer_email: this.state.email,
                restaurant: this.state.restaurant,
                number_of_patrons: this.state.patrons,
                reservation: this.state.is_reservation,
                date_time: this.state.date,
            }
        }

        api.postReservations(reservation_data).then((res) => {
            //console.log('res result x: ', res);
            //console.log('ID: ', res.id);
            api.postReservationsMeta(res.id, reservation_data_meta).then((res) => {
                //console.log(res);
                // do something with response here
                // error handling?
                // redirect to new route
            })
        })
    }

    toggleSwitch() {

        this.state.is_reservation ?
            this.setState({is_reservation: false}) :
            this.setState({is_reservation: true});
    }

    updateDate(date) {
        console.log(date);
        this.setState(date);
    }

    render() {
        /**
         * I could probably wrap all of the conditional elements in one View block?
         */
        var patronsLabel = this.state.is_reservation ?
            <Text style={styles.label}>Number of Patrons</Text> : false;

        var patronsInput = this.state.is_reservation ?
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                keyboardType="numeric"
                onChangeText={(patrons) => this.setState({patrons})}
            /> : false;

        var dateLabel = this.state.is_reservation ?
            <Text style={styles.label}>Date</Text> : false;

        var dateInput = this.state.is_reservation ?
            <DatePickerIOS
                date={this.state.date}
                mode="datetime"
                onDateChange={(date) => {
                console.log(date);
                this.setState({date});
            }}
            /> : false;

        return (
            <ScrollView style={styles.container}>
                <Text style={styles.label}>Restaurant</Text>
                <TextInput
                    style={styles.input}
                    placeholder={this.state.restaurant}
                    placeholderTextColor="#888"
                    editable={false}
                />
                <Text style={styles.label}>Customer Name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(name) => this.setState({name})}
                    autoCorrect={false}
                />
                <Text style={styles.label}>Customer Email</Text>
                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={(email) => this.setState({email})}
                    autoCorrect={false}
                />
                <Text style={styles.label}>Make Reservation?</Text>
                <Switch
                    onValueChange={() => this.toggleSwitch()}
                    style={{marginBottom: 10}}
                    onTintColor="#08C5B1"
                    value={this.state.is_reservation}/>
                {dateLabel}
                {dateInput}
                {patronsLabel}
                {patronsInput}
                <TouchableHighlight
                    style={defaultStyles.button}
                    onPress={this.submitForm.bind(this, this.state.data)}
                    underlayColor="white">
                    <Text style={defaultStyles.buttonText}>Submit</Text>
                </TouchableHighlight>
            </ScrollView>
        )
    }
}

module.exports = ReservationForm;