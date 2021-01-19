import React, { Component } from 'react';
import { Body, Title, Container, Item, Input, Icon, Picker } from 'native-base';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import s from './Style';
import styles from './styles';
import { ToWords } from 'to-words';


export default class extends Component {
    state = { result: "", data: "" }

    update = (value) => {
        let a = value;
        var price = value;
        const toWords = new ToWords();
        var sglDigit = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"],
            dblDigit = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"],
            tensPlace = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"],
            handle_tens = function (dgt, prevDgt) {
                return 0 == dgt ? "" : " " + (1 == dgt ? dblDigit[prevDgt] : tensPlace[dgt])
            },
            handle_utlc = function (dgt, nxtDgt, denom) {
                return (0 != dgt && 1 != nxtDgt ? " " + sglDigit[dgt] : "") + (0 != nxtDgt || dgt > 0 ? " " + denom : "")
            };

        var str = "",
            digitIdx = 0,
            digit = 0,
            nxtDigit = 0,
            words = [];
        if (price += "", isNaN(parseInt(price))) str = "";
        else if (parseInt(price) > 0 && price.length <= 10) {
            for (digitIdx = price.length - 1; digitIdx >= 0; digitIdx--) switch (digit = price[digitIdx] - 0, nxtDigit = digitIdx > 0 ? price[digitIdx - 1] - 0 : 0, price.length - digitIdx - 1) {
                case 0:
                    words.push(handle_utlc(digit, nxtDigit, ""));
                    break;
                case 1:
                    words.push(handle_tens(digit, price[digitIdx + 1]));
                    break;
                case 2:
                    words.push(0 != digit ? " " + sglDigit[digit] + " Hundred" + (0 != price[digitIdx + 1] && 0 != price[digitIdx + 2] ? " and" : "") : "");
                    break;
                case 3:
                    words.push(handle_utlc(digit, nxtDigit, "Thousand"));
                    break;
                case 4:
                    words.push(handle_tens(digit, price[digitIdx + 1]));
                    break;
                case 5:
                    words.push(handle_utlc(digit, nxtDigit, "Lakh"));
                    break;
                case 6:
                    words.push(handle_tens(digit, price[digitIdx + 1]));
                    break;
                case 7:
                    words.push(handle_utlc(digit, nxtDigit, "Crore"));
                    break;
                case 8:
                    words.push(handle_tens(digit, price[digitIdx + 1]));
                    break;
                case 9:
                    words.push(0 != digit ? " " + sglDigit[digit] + " Hundred" + (0 != price[digitIdx + 1] || 0 != price[digitIdx + 2] ? " and" : " Crore") : "")
            }
            str = words.reverse().join("")
        } else str = "";

        if (value != "") {
            const toWords = new ToWords();
            let words = toWords.convert(a, { currency: true });
            this.setState({ result: words })
        } else { this.setState({ result: "" }) }
    }
    render() {
        return (
            <>
                <View style={styles.view}>
                    <Text style={styles.text1}>Convert From Number</Text>
                    <Text ></Text>
                    <Text ></Text>
                    <Text ></Text>

                    <Item rounded>
                        <Input keyboardType="numeric" placeholder='Enter a value' value={this.state.user} onChangeText={this.update} />
                        <Icon name='checkmark-circle' />
                    </Item>
                    <Text ></Text>
                    <Text ></Text>

                    <Text style={styles.text1}>Converting To Currency</Text>

                    <View style={styles.text1}>
                        <Text> {this.state.result} </Text>
                    </View>
                    <Text ></Text>
                    <Text ></Text>

                    <Body style={styles.body1}></Body>
                    <Body style={styles.body1}></Body>

                </View>
            </>
        );
    }
}

