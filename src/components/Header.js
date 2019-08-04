import React from 'react';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Header = (props) => {
    return (
        <LinearGradient colors={['#a10040', '#0d0005', '#000']} style={[styles.viewStyle]} locations={[0.1, 0.6, 1]}>
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>{props.children}</Text>
            </View>
        </LinearGradient>
    );
};

const styles = {

    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 90,
        paddingTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        elevation: 2,
        position: 'relative',
    },
    textStyle: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },

};

export default Header;
