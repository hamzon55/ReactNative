import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TabBarIOS,
    View
} from 'react-native';

const Dashboard = require('./dashboard');
const Heroes = require('./heroesView');

class Tabs extends Component {

    constructor(props) {

        super(props)
        this.state = {
            selectedTab: 'dashboard'
        }
    }

    render() {
        return (
            <TabBarIOS style={{ backgroundColor: '#82a43a' }}>



                <TabBarIOS.Item title="Dashboard" selected={this.props.selectedTab == 'dashboard'}
                    onPress={() => {this.setState({selectedTab :'dashboard' })}} >
                    <Dashboard navigator={this.props.navigator} />
                </TabBarIOS.Item>
                <TabBarIOS.Item title="Heroes" selected={this.props.selectedTab == 'heroes'}
                    onPress={() => {this.setState({selectedTab :'heroes' })}} >
                    <Heroes />
                </TabBarIOS.Item>

            </TabBarIOS>
        )
    }
}
module.exports = Tabs;