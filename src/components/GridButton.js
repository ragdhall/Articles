import React, { Component } from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class GridButton extends Component {

    constructor(props) {
        super(props);
        this.ChooseImagePath = this.ChooseImagePath.bind(this);
    }

    ChooseImagePath(index) {
        switch (index) {
            case "MUSIC": return require("../data/images/music_icon.png");
            case "SCIENCE": return require("../data/images/science_icon.png");
            case "TECH": return require("../data/images/tech_icon.png");
            case "BUSINESS": return require("../data/images/business_icon.png");
            case "WORLD": return require("../data/images/world_icon.png");
            case "ENTERTAINMENT": return require("../data/images/entertainment_icon.png");
            case "FOOD": return require("../data/images/food_icon.png");
            case "POLITICS": return require("../data/images/politics_icon.png");
            case "HEALTH": return require("../data/images/health_icon.png");
            case "SPORTS": return require("../data/images/sports_icon.png");
            case "TRAVEL": return require("../data/images/travel_icon.png");
            case "ART": return require("../data/images/art_icon.png");
        }
    }

    render() {
        return (
            <TouchableOpacity onPress={() => this.props.Click(this.props.pos)} style={styles.buttonContainer}>
                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={[styles.buttonContainer]} colors={[this.props.backgroundColor_dark, this.props.backgroundColor_light]}>
                    <Image style={styles.imageStyle} source={this.ChooseImagePath(this.props.children)} /> 
                    <Text style={styles.buttonText}>{this.props.children}</Text>
                </LinearGradient>
            </TouchableOpacity >
        );
    }
}

const styles = {
    buttonText: {
        fontSize: 16,
        color: '#000',
        fontWeight: '600',
        paddingTop: 20,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 5,
        height: 148,
        width: 148,
        marginBottom: 10,
        marginLeft: 10,
        elevation: 5,
    },
    imageStyle: {
        height: 50,
        width: 50,
        opacity: 0.5,
    },
};
