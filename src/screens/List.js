import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { HeaderBackButton } from 'react-navigation';
import ArticleData from '../data/ArticleData.json';
import ListButton from '../components/ListButton.js';


export default class List extends Component {
    constructor(props) {
        super(props);
        this.ChooseImagePath = this.ChooseImagePath.bind(this);
        this.FindSum = this.FindSum.bind(this);
        this.QuickSort = this.QuickSort.bind(this);
        this.Partition = this.Partition.bind(this);
        this.Swap = this.Swap.bind(this);
        this.onPress = this.onPress.bind(this);
        this.sortedIndexArray = [];
        this.navigateBack = this.navigateBack.bind(this);
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Articles',
            headerBackTitle: null,
            headerStyle: {
                borderBottomWidth: 0,
                marginBottom: 10,
                backgroundColor: '#000',
                height: 30,
                paddingTop: 10,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                elevation: 0
            },
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
                paddingBottom: 50,
            },
            headerTintColor: '#fff',
            headerLeftContainerStyle: {
                paddingBottom: 25
            },
            headerLeft:
                <HeaderBackButton tintColor='#fff' onPress={() => {
                    navigation.state.params.refreshFunc();
                    navigation.navigate('Grid');
                }} />
            
        }
    };

    navigateBack({ navigation })
    {
        navigation.state.params.refreshFunc();
        navigation.navigate('Grid');
    }

    ChooseImagePath(index) {
        switch (index) {
            case 0: return require("../data/images/Time.png");
            case 1: return require("../data/images/NYT.png");
            case 2: return require("../data/images/Pop_Sci.jpeg");
            case 3: return require("../data/images/Time.png");
            case 4: return require("../data/images/NewScientist.png");
            case 5: return require("../data/images/Live_Science.jpg");
            case 6: return require("../data/images/Wash_Post.png");
            case 7: return require("../data/images/Forbes.jpg");
            case 8: return require("../data/images/BBC.jpg");
            case 9: return require("../data/images/Entrepreneur.jpg");
            case 10: return require("../data/images/Guardian.png");
            case 11: return require("../data/images/Wash_Post.png");
            case 12: return require("../data/images/WSJ.jpg");
            case 13: return require("../data/images/CNN.jpg");
            case 14: return require("../data/images/City_Journal.png");
        }
    }

    FindSum(arr) {
        var sumArray = [];
        for (let i = 0; i < globalThis.dataLength; i++) {
            let sum = 0;
            for (let j = 0; j < 12; j++) {
                sum += ArticleData[i].weights[j] * arr[j]
            }
            sumArray.push(sum);
        }
        return sumArray;
    }

    QuickSort(sumArray, indexArray, left, right) {

        var pivot = this.Partition(sumArray, indexArray, left, right);
        if (left < pivot - 1) {
            this.QuickSort(sumArray, indexArray, left, pivot - 1);
        }
        if (right > pivot) {
            this.QuickSort(sumArray, indexArray, pivot, right)
        }
        return indexArray;
    }

    Partition(sumArray, indexArray, left, right) {
        var pivot = Math.floor((left + right) / 2);

        while (left < right) {
            while (sumArray[left] < sumArray[pivot]) {
                left++
            }
            while (sumArray[right] > sumArray[pivot]) {
                right--
            }
            if (left <= right) {
                this.Swap(sumArray, indexArray, left, right);
                left++
                right--
            }
        }
        return left;
    }

    Swap(sumArray, indexArray, left, right) {
        var tempSum = sumArray[left];
        sumArray[left] = sumArray[right];
        sumArray[right] = tempSum;

        var tempIndex = indexArray[left];
        indexArray[left] = indexArray[right];
        indexArray[right] = tempIndex;

    }

    onPress = (link, title) => {
        this.props.navigation.navigate('Page', { link: link, title: title });
    }

    render() {
        console.disableYellowBox = true;
        var selected = this.props.navigation.getParam('selected', null);
        var sumArray = this.FindSum(selected); //finds the value of each article depending on the user's preferences
        var indexArray = [];

        for (let i = 0; i < global.dataLength; i++) {
            indexArray.push(i);
        }

        this.sortedIndexArray = this.QuickSort(sumArray, indexArray, 0, sumArray.length - 1); //sorts the array using Quicksort


        return (
            <ScrollView style={{backgroundColor: '#000'}}>
                <ListButton onPress = {this.onPress} link = {ArticleData[this.sortedIndexArray[7]].link} image={this.ChooseImagePath(this.sortedIndexArray[7])} title={ArticleData[this.sortedIndexArray[7]].title} source={ArticleData[this.sortedIndexArray[7]].source} />
                <ListButton onPress = {this.onPress} link = {ArticleData[this.sortedIndexArray[6]].link} image={this.ChooseImagePath(this.sortedIndexArray[6])} title={ArticleData[this.sortedIndexArray[6]].title} source={ArticleData[this.sortedIndexArray[6]].source} />
                <ListButton onPress = {this.onPress} link = {ArticleData[this.sortedIndexArray[5]].link} image={this.ChooseImagePath(this.sortedIndexArray[5])} title={ArticleData[this.sortedIndexArray[5]].title} source={ArticleData[this.sortedIndexArray[5]].source} />
                <ListButton onPress = {this.onPress} link = {ArticleData[this.sortedIndexArray[4]].link} image={this.ChooseImagePath(this.sortedIndexArray[4])} title={ArticleData[this.sortedIndexArray[4]].title} source={ArticleData[this.sortedIndexArray[4]].source} />
                <ListButton onPress = {this.onPress} link = {ArticleData[this.sortedIndexArray[3]].link} image={this.ChooseImagePath(this.sortedIndexArray[3])} title={ArticleData[this.sortedIndexArray[3]].title} source={ArticleData[this.sortedIndexArray[3]].source} />
                <ListButton onPress = {this.onPress} link = {ArticleData[this.sortedIndexArray[2]].link} image={this.ChooseImagePath(this.sortedIndexArray[2])} title={ArticleData[this.sortedIndexArray[2]].title} source={ArticleData[this.sortedIndexArray[2]].source} />
                <ListButton onPress = {this.onPress} link = {ArticleData[this.sortedIndexArray[1]].link} image={this.ChooseImagePath(this.sortedIndexArray[1])} title={ArticleData[this.sortedIndexArray[1]].title} source={ArticleData[this.sortedIndexArray[1]].source} />
                <ListButton onPress = {this.onPress} link = {ArticleData[this.sortedIndexArray[0]].link} image={this.ChooseImagePath(this.sortedIndexArray[0])} title={ArticleData[this.sortedIndexArray[0]].title} source={ArticleData[this.sortedIndexArray[0]].source} />
            </ScrollView>
        );
    };
};


