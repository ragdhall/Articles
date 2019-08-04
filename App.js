import React from 'react';
import { View, SafeAreaView } from 'react-native';
import AppNavigator from "./AppNavigator";


const App = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
            <View style={{ flex: 1 }}>
                <AppNavigator />
            </View>
        </SafeAreaView>
    );
};

export default App;

