import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import GridButton from '../components/GridButton.js';
import Header from '../components/Header.js';




const items = [
    { name: 'MUSIC', code_dark: '#9900d6', code_light: '#b570d1'}, { name: 'SCIENCE', code_dark: '#2ecc71', code_light: '#a5cfb6'},
    { name: 'TECH', code_dark: '#2287c9', code_light:'#a9cee8' }, { name: 'BUSINESS', code_dark: '#e74c3c', code_light: '#d68278'  },
    { name: 'WORLD', code_dark: '#efc002', code_light: '#ffe377'}, { name: 'ENTERTAINMENT', code_dark: '#e67e22', code_light: '#e0ae82'},
    { name: 'FOOD', code_dark: '#27ae60', code_light: '#9cd1b2' }, { name: 'POLITICS', code_dark: '#0361a0', code_light: '#7ea0b7'},
    { name: 'HEALTH', code_dark: '#a538ff', code_light: '#d39eff'}, { name: 'SPORTS', code_dark: '#db3f2e', code_light: '#d88a82'},
    { name: 'TRAVEL', code_dark: '#00c9ae', code_light: '#b2fff6'}, { name: 'ART', code_dark: '#dd00da', code_light: '#d897d7'},
];



export default class Grid extends Component {
    static navigationOptions = {
        header: <Header>Select 5 Areas of Interest</Header>,
        headerBackTitle: null,
    };


    constructor(props) {
        super(props);
        this.state = { 
            clicked: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        };

        this.Pressed = this.Pressed.bind(this);
        this.Refresh = this.Refresh.bind(this);

        global.dataLength = 14;
    }

    
    Refresh() {
        this.setState({ clicked: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]});
    }

    Pressed(position) {
        var temp_clicked = [...this.state.clicked];
        temp_clicked[position] = 1;
        this.setState({ clicked: temp_clicked });

        var count = 0;
        for (let i = 0; i < 12; i++) {
            if (temp_clicked[i] == 1) {
                count++;
            }
        }

        if (count >= 5) {
            this.props.navigation.navigate('List', {
                selected: temp_clicked,
                refreshFunc: this.Refresh //passing the Refresh() function as a parameter to the next screen so that the next screen can call it before it moves back to this screen
            });
        }
    }


    componentDidMount() {
        StatusBar.setBarStyle('light-content', true);
    }


    render() {
        console.disableYellowBox = true;
        return (
            <FlatGrid
                itemDimension={130}
                items={items}
                style={styles.gridView}
                renderItem={({ item, index }) => (
                    <GridButton Click={this.Pressed} pos={index} backgroundColor_dark={item.code_dark} backgroundColor_light={item.code_light}>{item.name}</GridButton>
                )}
            />
        );
    }
}

const styles = {
    gridView: {
        flex: 1,
        backgroundColor: '#000'
    },
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 5,
        height: 148,
        width: 148,
        marginBottom: 10,
        marginLeft: 10,

        elevation: 10
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    }
};


