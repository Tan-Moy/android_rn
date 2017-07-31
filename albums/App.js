//import libraries
import React from 'react';
import { Text, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//create a component
const App = () => (
    //pass data as props to header component
    <View>
        <Header headerText={'Albums!'} />
        <AlbumList />
    </View>
);

//Render it to device
export default App;
