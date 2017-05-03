import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TabBarIOS,
    View
} from 'react-native';


const iconDashboard = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACNElEQVRYR+3WT6sSURgG8OeciBb9IbhEOpOIRLRWiTZFtLyGG6HBhYuBWRghYl+jIFCYhZsBBRFkkBDkfoEoWkzroDaSjhAIUcsc3ziQMY125jYzYIvrVuc8P99533MOw4E/7MD5OAP8/xVotVo9AFeS6BUietNut1/41wqtQLPZ/ALgWhIAAHan03ksBTQajZznede3P+KcnwC4mhTANE05oF6vmwBUAEtfKGeMcSK6CeBhDIzd7XblAMMwTCIaWpb1OhhkGEYVwDAqgIhsy7LkAF3Xzc1mM+z3+zsAXderAhcVIHqg1+vJAbVa7SURaQB+iCDG2EUi2jbrBQCX4wAGg4EcEFxc07TPAG7ECPU/ao9Go38DVCqVRAHj8VgOKJfLGmPsvo+tA7iUVAUmk4kcUCqVxBS845y/D4YS0TGA51ExjDF7Op3KAYVCwWSMDR3H2ZmCfD5fFd/FATiOIwfkcjmxEX0loo97gu4CeBIVIPaB2WwmB2Sz2UeMsTvbECJ6ltRhJPaBUEDw32UymcSmQFRgPp/LK1AsFs+vVqtzW8h6vf7062yIWvk/9oFQgKqqogkfAPi+J/EIwK0YkvAKCIDY713X3ZkCRVFiTYHogcViIX8FiqKIKfgrIO5puFwuTwW4B+DbnlKLm9HtqK9ANGEoQFXVI8/zfp94nPO3AFJRQ/3PnQoQDEqn04mNoeiB0AoEAalU6innPJFbMYAPruu+8meE3oqTKL1sjTPAwSvwE1ZM1iGqYnIlAAAAAElFTkSuQmCC'
const iconHeroes = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACSUlEQVRYR+2WMYjTUBjH/6+PEhHqpI1pQ4lQnAQnuc1FsVAoyIkWhCIidLBDew5OgtkVa6mDtloEBcGgFjs5nSLcVvBwcWusNs3g0EWrts0n7+hBFe4uaRNvuW9M3vt+v3zvfR9h2OVgu8zHnsBeBQKtQLFYTA2Hw/e1Wu3HVpc9EAFd1/cNBoO7RPSqUqm82a7TfBcolUraZDIxAKxVq9XiTm3uq0ChUEgDeEJEfUmSTpTL5eF/EdB1PdTv928S0Q0AYyJaqtfrH3aCi/cLVyCfzx8cjUZPAaQ2EjJ2vdFo3HIDX1ggl8stEdFzAIkp8G0ymTyl67oTuEA2m70K4A4AaQobOI5z3DCMrlv4XBXIZDL7Oef3GWO5WRARXWw2m8+8wD0LpNPpo5zzFwCO/QP6AuBMq9X6FJhAKpU6zRgT8ANbQAjAOwAPIpHIS8MwfruR8dIFIU3TTjLGzgNYBnB4KxEiWjFNs+K3wGw+rmlahohERUIzL74T0eVutysmoavwUoG/EiYSiccALs08NDnnZzudzror8nTRXAKqqoojEF+/GauO41ywLOubF7jnLhAbotGoHA6HPwI4tJGAsXuyLF9rt9sjr/C5BOLx+GsAGQC/iKhgWdajecCbezwdQSwWuwLgIQAbwDnLstYWgXuqgCzLRzjn64wxMWyWe73e10XhXgRCiqKsAvgsSVLeNM2ffsBdCyiKskJE3Lbt236BXd8BVVXj4/E4adu2GLO+h5tLKNaIOR9IuBEIBOz6CAKl+/FPuKjgHywAtyG9W2tYAAAAAElFTkSuQmCC'
const locationHeroes = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEaElEQVRYR7WWa2gcVRTHz7mTTVuJUo0fJE3m3nk0RhRBU6nig34QhPqhJRSpWPRDQYMKasUi1aiFoo3UCrEWRWOtWCzFB6KtUkXERytCsBRKm2TuzL2zTUwtYsVH0+zOPTKVQLKZ3dlNdb/tnnP+/9+ec+fMRWjw4wmxGgx0AhjXgLWYIbQQwASCOW4Y+zaKoh8bkcR6k13O70TADRbhXgPwG0ESYXPzKBEtNMZcQUSXMsK7AKgNEvZGeDI8UI92XQB+hxg0CHFh0YLtw8PDf9QS7mxvX5KwQg+iKQRab8+DyAVwuPjMAtoUaP1TntjMuCfEWgTGAxX216qrCeBy51VisLvRuU4bOpw/bCFeHCj1QjWIqgCuLR5tMpYeOSk/auSfV+Z6ttiFYLYFcXwsSycTwPf9S6iUfCh1dHs18y7b7p5i7FpETNCY0UDrw1m5juNwSJL+KI7X1g2QnnggXBbGanNWkWc794MFNhGNoQFjEFstMGcCrXdm5nNnCzL4Joiig5Xx7A4IsZWIDkqtv5rTUu48BaYsZbG4d9ah484TQDAp4+iVyhq3w12GLFklte6rC0Bw8X3r5a0rhoaGSjML8kbj2aKfmthgGIYjFUbo2/YPQRwvzwXoEkKUE+gLimp9ZXKn696QJMkdUustWa0Wtr2xgHhsVOv9czvnvgelyY1yfLw4MzZnBL7vt5tyeUOo1IZKEZ/71xOUVkutn8kC8GuMzrfFy2xh87aRkZGx2gDgLzC8/Hao1d2VJkKIhRaxXVKHc2Jprt/h7IDS2c3BxMTpmbVtbW0XLSoUDkitV+SOIE1wufMmMRiIoujonC7Y9tUG8MmWc5O9R0+d+ms67nJnBwOzJ+tx9Dm/LkHsjZR6oC4A33bWEaOyVGrWSZ8u9n3fS86V30ULjiBRExpkxGhQan0ocxdwvt5KYDI4qffUB+D7C6hU+lJqfWu1RZT+flWHd81kk7GiKDoOAFNVci2vQ3wni+qmrHjVVbxUuI+QoZ+DONpXCyIv5tnivjRHxmp3QwAAwFzOD4Va35hnUi2etzfSupy3Ie8BxM5Qqa3zgfA4fxERDwRKfV2tPvc+4HH+ToL4vFLqRCMQnm3fjMDWBLF6rFZdLoDjOFdaBvoCHa1rEODzQpLcc2Js7NcLAvh3L/AHLaJ4NI4/rQfCFaIXiKZCrd/Ky8/twLSA1yEOy6K6BQCSWqL+Er/dWFNPh3Hcm2eeewhnCricr2SIywOlnq0JIMROsqznpJS//KcAqZgjxOsW0WvVLqjnNyjQZTJWA/WYN9SBNDltL7HygCyqnkqD7u7uwpnTp9+XcbyqXvOGAc5DcP4QIf4p1ezN5nGnDwmOBHH0yf8KkIp7nH9BlrUmDMPf0+9CiC6LaJPU+t5GzOfVgbRoqePclhhYFero8fNAOVfvC94DWQIud16yGHycGNNSz9Mx71VcrVAIsbgJYB8RNZ8tlVaOj4//3Wj75z2CaSOX8x4LAEe1/mA+5mnNPxaO7TBQNRtQAAAAAElFTkSuQmCC';

const Dashboard = require('./dashboardView');
const Heroes = require('./heroes');
const Location = require('./location');

class Tabs extends Component{

  constructor(props){
    super(props)

    this.state = {
      selectedTab: 'dashboard'
    }
  }

  render(){
    return(
        <TabBarIOS style={{backgroundColor: '#FFFFFF'}}>

          <TabBarIOS.Item
            title="Dashboard"
            selected={this.state.selectedTab === 'dashboard'}
            icon={{uri: iconDashboard}}
            onPress={() => {
              this.setState({
                selectedTab: 'dashboard'

              })

            }}>

            <Dashboard navigator={this.props.navigator}/>
          </TabBarIOS.Item>

          <TabBarIOS.Item
            title="Heroes"
            selected={this.state.selectedTab === 'heroes'}
            icon={{uri: iconHeroes}}
            onPress={() => {
              this.setState({
                selectedTab: 'heroes'
              })

            }}>

            <Heroes/>
          </TabBarIOS.Item>


    <TabBarIOS.Item
            title="Location"
            selected={this.state.selectedTab === 'location'}
            icon={{uri: locationHeroes}}
            onPress={() => {
              this.setState({
                selectedTab: 'location'
              })

            }}>

            <Location/>
          </TabBarIOS.Item>



        </TabBarIOS>

    )
  }
}


module.exports = Tabs;