import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TabBarIOS,
    View
} from 'react-native';


const iconDashboard = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACNElEQVRYR+3WT6sSURgG8OeciBb9IbhEOpOIRLRWiTZFtLyGG6HBhYuBWRghYl+jIFCYhZsBBRFkkBDkfoEoWkzroDaSjhAIUcsc3ziQMY125jYzYIvrVuc8P99533MOw4E/7MD5OAP8/xVotVo9AFeS6BUietNut1/41wqtQLPZ/ALgWhIAAHan03ksBTQajZznede3P+KcnwC4mhTANE05oF6vmwBUAEtfKGeMcSK6CeBhDIzd7XblAMMwTCIaWpb1OhhkGEYVwDAqgIhsy7LkAF3Xzc1mM+z3+zsAXderAhcVIHqg1+vJAbVa7SURaQB+iCDG2EUi2jbrBQCX4wAGg4EcEFxc07TPAG7ECPU/ao9Go38DVCqVRAHj8VgOKJfLGmPsvo+tA7iUVAUmk4kcUCqVxBS845y/D4YS0TGA51ExjDF7Op3KAYVCwWSMDR3H2ZmCfD5fFd/FATiOIwfkcjmxEX0loo97gu4CeBIVIPaB2WwmB2Sz2UeMsTvbECJ6ltRhJPaBUEDw32UymcSmQFRgPp/LK1AsFs+vVqtzW8h6vf7062yIWvk/9oFQgKqqogkfAPi+J/EIwK0YkvAKCIDY713X3ZkCRVFiTYHogcViIX8FiqKIKfgrIO5puFwuTwW4B+DbnlKLm9HtqK9ANGEoQFXVI8/zfp94nPO3AFJRQ/3PnQoQDEqn04mNoeiB0AoEAalU6innPJFbMYAPruu+8meE3oqTKL1sjTPAwSvwE1ZM1iGqYnIlAAAAAElFTkSuQmCC'
const camara = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACO0lEQVRoQ+2Y/TEEQRDFnwjIABEgAxkgAkSACBABIkAEyEAGiAARIALqV7WtZqdm73pvb3b3rqarrur+mJnt1+/1x8yKFtxWFtx/FQBDM1gYKAx0jECRUMcAdt6+tAxsSLqStC2J/0Pah6RXSWeS+F+zFAM4/CJpbUivE9/+lrQTg0gBeJS0NzLnzZ0nSfuhbykAXyOMvvmMhDanAfh1yIwl8bom0u4lPVc6RssYucVvV9JhS7ZrQU8xMC8A0H2aSrzIYXLuuoVsewFwLOmuZWSPJN069mQHEDtPNTupkg/ZYEiJYnEjiepi5gHRGoAjKP9L4iqBQ/STppKM89T3kK1pVTArACqENRtPNA15yBo58T4hatkAUG1wGiPiOOFthjABeJMTjDRVp2wAwiheSDpvoz1Jl5LYh01iLxsA2rzVeUYRS1gvDvZyhvUJzkhZNgDhwd4mFzvoOaMAaJJEKCHksOXVTrXuLZAd8utdQgdVc8KfhUziuIzSD1adLPxUF6dByyi+ztrIQvYGa2QAYAzAGTPqOZNmExNEnjXsM3uILy0Ri9mqkH0nNcwxVnOTssQmYXEacKMa5ppAeFLBOztlZ8CcJcLJl4QIjb2A1O66ExD3BsB8YDDjSolswislcuJKaQOghyXWTAWAJr3lz/vRea37jN+plvJZBU1C9dhYoOQyYtRe55reRu2lgA3r8+J/xnOQDQFNvnAs7ePujMHqf1thoP+Y179YGCgMdIxAkVDHAHbevvAM/AEuonwx0J1w3QAAAABJRU5ErkJggg=='
const location = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEaElEQVRYR7WWa2gcVRTHz7mTTVuJUo0fJE3m3nk0RhRBU6nig34QhPqhJRSpWPRDQYMKasUi1aiFoo3UCrEWRWOtWCzFB6KtUkXERytCsBRKm2TuzL2zTUwtYsVH0+zOPTKVQLKZ3dlNdb/tnnP+/9+ec+fMRWjw4wmxGgx0AhjXgLWYIbQQwASCOW4Y+zaKoh8bkcR6k13O70TADRbhXgPwG0ESYXPzKBEtNMZcQUSXMsK7AKgNEvZGeDI8UI92XQB+hxg0CHFh0YLtw8PDf9QS7mxvX5KwQg+iKQRab8+DyAVwuPjMAtoUaP1TntjMuCfEWgTGAxX216qrCeBy51VisLvRuU4bOpw/bCFeHCj1QjWIqgCuLR5tMpYeOSk/auSfV+Z6ttiFYLYFcXwsSycTwPf9S6iUfCh1dHs18y7b7p5i7FpETNCY0UDrw1m5juNwSJL+KI7X1g2QnnggXBbGanNWkWc794MFNhGNoQFjEFstMGcCrXdm5nNnCzL4Joiig5Xx7A4IsZWIDkqtv5rTUu48BaYsZbG4d9ah484TQDAp4+iVyhq3w12GLFklte6rC0Bw8X3r5a0rhoaGSjML8kbj2aKfmthgGIYjFUbo2/YPQRwvzwXoEkKUE+gLimp9ZXKn696QJMkdUustWa0Wtr2xgHhsVOv9czvnvgelyY1yfLw4MzZnBL7vt5tyeUOo1IZKEZ/71xOUVkutn8kC8GuMzrfFy2xh87aRkZGx2gDgLzC8/Hao1d2VJkKIhRaxXVKHc2Jprt/h7IDS2c3BxMTpmbVtbW0XLSoUDkitV+SOIE1wufMmMRiIoujonC7Y9tUG8MmWc5O9R0+d+ms67nJnBwOzJ+tx9Dm/LkHsjZR6oC4A33bWEaOyVGrWSZ8u9n3fS86V30ULjiBRExpkxGhQan0ocxdwvt5KYDI4qffUB+D7C6hU+lJqfWu1RZT+flWHd81kk7GiKDoOAFNVci2vQ3wni+qmrHjVVbxUuI+QoZ+DONpXCyIv5tnivjRHxmp3QwAAwFzOD4Va35hnUi2etzfSupy3Ie8BxM5Qqa3zgfA4fxERDwRKfV2tPvc+4HH+ToL4vFLqRCMQnm3fjMDWBLF6rFZdLoDjOFdaBvoCHa1rEODzQpLcc2Js7NcLAvh3L/AHLaJ4NI4/rQfCFaIXiKZCrd/Ky8/twLSA1yEOy6K6BQCSWqL+Er/dWFNPh3Hcm2eeewhnCricr2SIywOlnq0JIMROsqznpJS//KcAqZgjxOsW0WvVLqjnNyjQZTJWA/WYN9SBNDltL7HygCyqnkqD7u7uwpnTp9+XcbyqXvOGAc5DcP4QIf4p1ezN5nGnDwmOBHH0yf8KkIp7nH9BlrUmDMPf0+9CiC6LaJPU+t5GzOfVgbRoqePclhhYFero8fNAOVfvC94DWQIud16yGHycGNNSz9Mx71VcrVAIsbgJYB8RNZ8tlVaOj4//3Wj75z2CaSOX8x4LAEe1/mA+5mnNPxaO7TBQNRtQAAAAAElFTkSuQmCC';

const Dashboard = require('./dashboard');
const Camara = require('./camara');
const Maps = require('./maps');

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
            title="Camara"
            selected={this.state.selectedTab === 'camara'}
            icon={{uri: camara}}
            onPress={() => {
              this.setState({
                selectedTab: 'camara'
              })

            }}>

            <Camara/>
          </TabBarIOS.Item>




  <TabBarIOS.Item
            title="Maps"
            selected={this.state.selectedTab === 'maps'}
            icon={{uri: location}}
            onPress={() => {
              this.setState({
                selectedTab: 'maps'
              })

            }}>
              <Maps/>
          </TabBarIOS.Item>




        </TabBarIOS>

    )
  }
}


module.exports = Tabs;