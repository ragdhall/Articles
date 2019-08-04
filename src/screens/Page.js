import React, { Component } from 'react';
import { WebView } from 'react-native-webview';


export default class Page extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title', null),
            headerStyle: {
                borderBottomWidth: 0,
                marginBottom: 10,
                backgroundColor: '#000',
                height: 30,
                paddingTop: 10,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
            },
            headerBackTitle: null,
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
                paddingBottom: 50,
            },
            headerTintColor: '#fff',
            headerLeftContainerStyle: {
                paddingBottom: 25,
            },
            
        }
    };

    render() {
        console.disableYellowBox = true;
        return (
            <WebView source = {{ uri: this.props.navigation.getParam('link', null) }} />
        );
    };
};  

