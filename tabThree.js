import React, { Component } from 'react';
import { Body, Title, Container, Item, Input, Icon, Picker } from 'native-base';
import { Text, View } from 'react-native';
import styles from './styles';
import DatePicker from 'react-native-datepicker'
import moment from 'moment';

class dateConv extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fdate: "", tdate: "", year: null, month: null, day: null, hour: null,
            min: null, sec: null
        }
    }


    findDiff = () => {
        if (this.state.fdate !== "" && this.state.tdate !== "") {
            let dt1 = moment(this.state.fdate, 'DD-MM-YYYY');
            let dt2 = moment(this.state.tdate, 'DD-MM-YYYY');
            let secDiff = Math.abs(dt2.diff(dt1, 'seconds'));
            let minDiff = Math.abs(dt2.diff(dt1, 'minutes'));
            let hourDiff = Math.abs(dt2.diff(dt1, 'hours'));
            let dayDiff = Math.abs(dt2.diff(dt1, 'days'));
            let monDiff = Math.abs(dt2.diff(dt1, 'months'));
            let yearDiff = Math.abs(dt2.diff(dt1, 'years'));
            this.setState({ sec: secDiff });
            this.setState({ min: minDiff });
            this.setState({ hour: hourDiff });
            this.setState({ day: dayDiff });
            this.setState({ month: monDiff });
            this.setState({ year: yearDiff });
        }
    }

    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.text1}>Difference between Dates</Text>
                <Text>{"\n"}</Text>

                <View style={styles.contentsContainer}>
                    <DatePicker
                        style={{ width: 200 }}
                        date={this.state.fdate}
                        mode="date"
                        placeholder="Select From Date"
                        format="DD-MM-YYYY"
                        minDate="01-01-1970"
                        maxDate="01-01-2050"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        onDateChange={(date) => {
                            this.setState({ fdate: date });
                            this.findDiff()
                        }}
                    />
                </View>
                <Text>{"\n"}</Text>
                <View style={styles.contentsContainer}>
                    <DatePicker
                        style={{ width: 200 }}
                        date={this.state.tdate}
                        mode="date"
                        placeholder="Select To Date"
                        format="DD-MM-YYYY"
                        minDate="01-01-1970"
                        maxDate="01-01-2050"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"

                        onDateChange={(date) => {
                            this.setState({ tdate: date });
                            this.findDiff()
                        }}
                    />
                </View>
                <Text>{"\n"}</Text>
                <Text>{"\n"}</Text>
                <Text style={styles.text1}>Seconds : {this.state.sec} </Text>
                <Text style={styles.text1}>Minutes : {this.state.min} </Text>
                <Text style={styles.text1}>Hours : {this.state.hour} </Text>
                <Text style={styles.text1}>Days : {this.state.day} </Text>
                <Text style={styles.text1}>Months : {this.state.month} </Text>
                <Text style={styles.text1}>Years : {this.state.year} </Text>
                <Body style={styles.body1}></Body>

            </View>

        )
    }
}

export default dateConv;