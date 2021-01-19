import React, { Component } from 'react';
import { Body, Title, Container, Item, Input, Icon, Picker } from 'native-base';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import s from './Style';
import styles from './styles';

const arr = ["union", "intersect", "subtract"];

export default class extends Component {
    state = { fromcurr: "union", result: [], seta: [], setb: [], user1: [], user2: [] }
    alterfrom = (value) => { this.setState({ fromcurr: value, result: [] }); }
    changer = (value) => { this.state.seta.push(this.state.user1); this.setState({ user1: [] }); }
    changeh = (value) => { this.state.setb.push(this.state.user2); this.setState({ user2: [] }); }
    change1 = (value) => { if (value != "") { this.setState({ user1: value }) } }
    change2 = (value) => { if (value != "") { this.setState({ user2: value }) } }
    update = (value) => {
        var a = this.state.seta;
        var b = this.state.setb;
        var c = this.state.fromcurr;
        if (c == "union") {
            var ans = a.concat(b)
            ans = ans.filter((item, index) => {
                return (ans.indexOf(item) == index)
            })
            this.setState({ result: ans })
        } else if (c == "intersect") {
            var ans = a.filter(a => b.includes(a));
            if (ans != "") this.setState({ result: ans })
            else alert("No Intersections found!!")
        } else if (c == "subtract") {
            var ans = a.filter(a => !b.includes(a));
            if (ans != "") this.setState({ result: ans })
            else alert("No values found!!")

        }
    }
    render() {
        return (
            <>
                <View style={styles.view}>
                    <Text style={styles.text1}>Convert Sets from</Text>
                    <Picker style={styles.picker} selectedValue={this.state.fromcurr} onValueChange={this.alterfrom}  >
                        {arr.map((unit, i) => (<Picker.Item label={unit} value={unit} key={i} />))}
                    </Picker>
                    <Item rounded>
                        <Input keyboardType="numeric" placeholder='Enter a value' value={this.state.user1} onChangeText={this.change1} />
                        <Icon name='checkmark-circle' />
                    </Item>
                    <Button
                        onPress={this.changer}
                        title="ADD Value"
                        color="#0033cc"
                    />

                    <Text style={styles.text1}> [{this.state.seta.map(r => <Text>{r},</Text>)}]</Text>

                    <Item rounded>
                        <Input keyboardType="numeric" placeholder='Enter a value' value={this.state.user2} onChangeText={this.change2} />
                        <Icon name='checkmark-circle' />
                    </Item>
                    <Button
                        onPress={this.changeh}
                        title="ADD Value"
                        color="#0033cc"
                    />
                    <Text style={styles.text1}> [{this.state.setb.map(r => <Text>{r},</Text>)}] </Text>

                    <Text style={styles.text1}>Converting To  </Text>


                    <View style={styles.text1}>
                        <Text style={styles.text1}> [{this.state.result.map(r => <Text>{r},</Text>)}] </Text>
                    </View>
                    <Text ></Text>
                    <Button
                        onPress={this.update}
                        title="calculate"
                        color="#0033cc"
                        accessibilityLabel="Learn more "
                    />
                    <Text ></Text>

                    <Body style={styles.body1}></Body>
                </View>
            </>
        );
    }
}

