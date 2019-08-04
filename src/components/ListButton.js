import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

const ListButton = (props) => {
    return (
        <TouchableOpacity style = {styles.buttonStyle} onPress = {() => props.onPress(props.link, props.title)}>
            <View style={styles.imageContainerStyle}>
                <Image style={styles.imageStyle} source={props.image} />
            </View>
            <View style={styles.headerContentStyle}>
                <Text numberOfLines={2} style={styles.titleTextStyle}>{props.title}</Text>
                <Text numberOfLines={1} style={styles.sourceTextStyle}>{props.source}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        flex : 1,
        flexShrink: 1,
    },
    imageStyle: {
        height: 75,
        width: 75,
        resizeMode: 'contain'

    },
    imageContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 2,
        marginBottom: 2,
        borderWidth: 0.5,
        borderColor: '#919191'
    },
    titleTextStyle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonStyle: {
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#919191',
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        elevation: 1,
        marginBottom: 2,
    },
    sourceTextStyle: {
        fontSize: 14,
        alignSelf: 'flex-end',
        paddingRight: 20
    }
};


export default ListButton;
