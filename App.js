import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, ScrollableTab, Body, Title, Left, Right, Footer, FooterTab, Button, Icon } from 'native-base';
import { Image } from 'react-native';

import Tab1 from './tabOne';
import Tab2 from './tabTwo';
import Tab3 from './tabThree';
import Tab4 from './tabFour';

export default function App() {
  return (
    <Container style={{ backgroundColor: "#1a1a00" }} >
      <Header hasTabs style={{ backgroundColor: "#1a1a00" }}>
        <Body>
          <Title>    Just Convert 🔥</Title>
        </Body>
      </Header>
      <Tabs renderTabBar={() => <ScrollableTab />}>
        <Tab tabstyle={{ backgroundColor: "#1a1a00" }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: '#262626' }} heading="Currency Conversion 🚧">
          <Tab1 style={{ backgroundColor: "#d9d9d9" }} />
        </Tab>
        <Tab style={{ backgroundColor: "#1a1a00" }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: '#262626' }} heading="Set Conversion 🌡️">
          <Tab2 />
        </Tab>
        <Tab style={{ backgroundColor: "#1a1a00" }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: '#262626' }} heading="Date Difference ​💴​💱​💵​">
          <Tab3 />
        </Tab>
        <Tab style={{ backgroundColor: "#1a1a00" }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: '#262626' }} heading="Math calc 🕒">
          <Tab4 />
        </Tab>

      </Tabs>


      <Footer>
        <FooterTab>

        </FooterTab>
      </Footer>
    </Container >
  );
}


