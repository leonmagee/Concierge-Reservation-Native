import React, {Component} from 'react';
import SuccessMessage from './SuccessMessage';
import homeRoute from './Main'; // should be a better way to route back home
import ErrorMessage from './Parts/ErrorMessage';
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
});

class ReservationForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            error: false,
            name: '',
            email: '',
            conciergeID: props.conciergeID,
            conciergeName: props.conciergeName, // pass down concierge ID from initial login...
            restaurant: props.name,
            mapURL: props.mapURL,
            needInfo: false,
        }
    }

    submitForm() {

        this.setState({
            isLoading: true,
            needInfo: false,
        })

        if (!( this.state.name && this.state.email )) {

            this.setState({
                needInfo: true,
                isLoading: false,
            })

            return;
        }

        var reservation_data = {
            title: 'Referral for ' + this.state.name + ' at ' + this.state.restaurant,
            status: 'publish',
        }

        var reservation_data_meta = {
            fields: {
                customer_name: this.state.name,
                customer_email: this.state.email,
                restaurant: this.state.restaurant,
                concierge: this.state.conciergeName,
                concierge_id: this.state.conciergeID,
            }
        }

        var email_data = {
            restaurant: this.state.restaurant,
            name: this.state.name,
            concierge: this.state.conciergeName,
            email: this.state.email,
            map_url: this.state.mapURL,
            website_url: this.props.websiteURL,
            menu_url: this.props.menuURL,
            google_map_url: this.props.googleMapURL,
        }

        api.postReservations(reservation_data).then((res) => {
            api.postReservationsMeta(res.id, reservation_data_meta).then((res) => {
                /**
                 * @todo error handling here
                 */
                api.sendPromotionEmail(email_data).then((res) => {

                    this.props.navigator.push({
                        title: 'Success',
                        component: SuccessMessage,
                        passProps: {
                            name: this.state.name,
                            restaurant: this.state.restaurant,
                        },
                        //leftButtonIcon: ???,
                        leftButtonTitle: 'Home',
                        navigationBarHidden: false,
                        onLeftButtonPress: () => {
                            this.props.navigator.popToTop();
                            //this.getInChat = false;
                        },
                    })

                })
            })
        })
    }

    render() {

        return (
            <View style={styles.container}>
                <Text style={defaultStyles.label}>Restaurant</Text>
                <TextInput
                    style={defaultStyles.input}
                    placeholder={this.state.restaurant}
                    placeholderTextColor="#888"
                    editable={false}
                />
                <Text style={defaultStyles.label}>Customer Name</Text>
                <TextInput
                    style={defaultStyles.input}
                    onChangeText={(name) => this.setState({name})}
                    autoCorrect={false}
                />
                <Text style={defaultStyles.label}>Customer Email</Text>
                <TextInput
                    style={defaultStyles.input}
                    autoCapitalize="none"
                    onChangeText={(email) => this.setState({email})}
                    autoCorrect={false}
                />
                <Text style={defaultStyles.label}>Customer Address</Text>
                <TextInput
                    style={defaultStyles.input}
                    autoCapitalize="none"
                    onChangeText={(address) => this.setState({address})}
                    autoCorrect={false}
                />
                <ErrorMessage error={this.state.needInfo} message="NAME AND EMAIL REQUIRED"/>
                <TouchableHighlight
                    style={[defaultStyles.button, defaultStyles.buttonColorBlue]}
                    onPress={this.submitForm.bind(this, this.state.data)}
                    underlayColor="#4EB3A2">
                    <Text style={defaultStyles.buttonText}>Submit</Text>
                </TouchableHighlight>
                <ActivityIndicator
                    animating={this.state.isLoading}
                    color="#111"
                    size="large"></ActivityIndicator>
            </View>
        )
    }
}

module.exports = ReservationForm;