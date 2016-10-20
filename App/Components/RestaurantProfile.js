import React, {Component} from 'react';
import ReservationForm from './ReservationForm';

var api = require('../Utils/api');
var defaultStyles = require('./DefaultStyles');

import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Image,
    TouchableHighlight,
    ActivityIndicator
} from 'react-native';

var styles = StyleSheet.create({
    container: {
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#FAFAFA',
        flex: 1
    },
    title: {
        fontSize: 25,
        padding: 11,
        textAlign: 'center',
        color: '#222'
    },
    subTitle: {
        fontSize: 18,
        marginTop: 20,
        marginBottom: 4,
        fontWeight: 'bold',
        color: '#333'
    },
    address: {
        color: '#333',
        fontSize: 17,
        marginTop: 5,
        marginBottom: 2,
    },
    addressDetails: {
        color: '#555',
        fontSize: 13,
        marginBottom: 5,
    },
    promotions: {
        color: '#222',
        fontSize: 16,
        padding: 8
    },
    hoursWrap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 5,
        paddingBottom: 10,
    },
    hoursWrapInner: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 15,
        height: 45,
    },
    hoursLabel: {
        fontWeight: 'bold',
        color: '#333',
    },
    hoursTime: {
        color: '#555',
        fontSize: 12,
    },
});

class RestaurantProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            error: false,
            results: false,
            name: props.restaurantName,
            promotions: props.promotions
        }
    }

    processDiscount() {
        // try calling this with fat arrow function - won't need to bind 'this'?
        this.props.navigator.push({
            component: ReservationForm,
            title: 'Coupon / Reservation',
            passProps: {
                name: this.state.name,
                conciergeID: this.props.conciergeID,
                conciergeName: this.props.conciergeName,
                mapURL: this.props.mapURL,
                websiteURL: this.props.websiteURL,
                menuURL: this.props.menuURL,
                googleMapURL: this.props.googleMapURL,
            },
            navigationBarHidden: false
        })
    }

    render() {

        var monday = ( opens = this.props.hours.monday[0] ) ? ( opens + ' - ' + this.props.hours.monday[1]) : 'closed';
        var tuesday = ( opens = this.props.hours.tuesday[0] ) ? ( opens + ' - ' + this.props.hours.tuesday[1]) : 'closed';
        var wednesday = ( opens = this.props.hours.wednesday[0] ) ? ( opens + ' - ' + this.props.hours.wednesday[1]) : 'closed';
        var thursday = ( opens = this.props.hours.thursday[0] ) ? ( opens + ' - ' + this.props.hours.thursday[1]) : 'closed';
        var friday = ( opens = this.props.hours.friday[0] ) ? ( opens + ' - ' + this.props.hours.friday[1]) : 'closed';
        var saturday = ( opens = this.props.hours.saturday[0] ) ? ( opens + ' - ' + this.props.hours.saturday[1]) : 'closed';
        var sunday = ( opens = this.props.hours.sunday[0] ) ? ( opens + ' - ' + this.props.hours.sunday[1]) : 'closed';


        var restaurantPromotions = this.state.promotions.map((item, index) => {
            return (
                <View key={index}>
                    <View style={defaultStyles.flexWrap}>
                        <View style={defaultStyles.dot2}/>
                        <Text style={styles.promotions}>{item}</Text>
                    </View>
                    <View style={defaultStyles.separator2}/>
                </View>
            )
        })
        return (
            <ScrollView style={styles.container}>
                <View style={defaultStyles.flexWrap}>
                    <View style={defaultStyles.dot}/>
                    <Text style={defaultStyles.restaurants}>{this.state.name}</Text>
                </View>
                <View style={defaultStyles.separator}/>

                <Text style={styles.subTitle}>Discounts & Promotions</Text>
                <View style={defaultStyles.separator2}/>
                {restaurantPromotions}
                <Text style={styles.subTitle}>Address</Text>
                <View style={defaultStyles.separator2}/>
                <View>
                    <Text style={styles.address}>{this.props.address}</Text>
                    <Text style={styles.addressDetails}>{this.props.city}, {this.props.state} {this.props.zip}</Text>
                </View>
                <Text style={styles.subTitle}>Hours</Text>
                <View style={defaultStyles.separator2}/>
                <View style={styles.hoursWrap}>
                    <View style={styles.hoursWrapInner}>
                        <Text style={styles.hoursLabel}>Monday</Text>
                        <Text style={styles.hoursTime}>{monday}</Text>
                    </View>
                    <View style={styles.hoursWrapInner}>
                        <Text style={styles.hoursLabel}>Tuesday</Text>
                        <Text style={styles.hoursTime}>{tuesday}</Text>
                    </View>
                    <View style={styles.hoursWrapInner}>
                        <Text style={styles.hoursLabel}>Wednesday</Text>
                        <Text style={styles.hoursTime}>{wednesday}</Text>
                    </View>
                    <View style={styles.hoursWrapInner}>
                        <Text style={styles.hoursLabel}>Thursday</Text>
                        <Text style={styles.hoursTime}>{thursday}</Text>
                    </View>
                    <View style={styles.hoursWrapInner}>
                        <Text style={styles.hoursLabel}>Friday</Text>
                        <Text style={styles.hoursTime}>{friday}</Text>
                    </View>
                    <View style={styles.hoursWrapInner}>
                        <Text style={styles.hoursLabel}>Saturday</Text>
                        <Text style={styles.hoursTime}>{saturday}</Text>
                    </View>
                    <View style={styles.hoursWrapInner}>
                        <Text style={styles.hoursLabel}>Sunday</Text>
                        <Text style={styles.hoursTime}>{sunday}</Text>
                    </View>
                </View>
                <TouchableHighlight
                    style={[defaultStyles.button, defaultStyles.buttonColorBlue]}
                    onPress={this.processDiscount.bind(this)}
                    underlayColor="#4EB3A2">
                    <Text style={defaultStyles.buttonText}>Coupon / Reservation</Text>
                </TouchableHighlight>
            </ScrollView>
        )
    }

}

module.exports = RestaurantProfile;