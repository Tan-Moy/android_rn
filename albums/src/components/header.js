import React from 'react';
import { Text, View } from 'react-native';

//props is what header recieved from it's parent
const Header = (props) => {
    const { textStyle, viewStyle } = styles; //destructure the style object and pass it on as prop to the header component
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

//styling, shadow proprties are ios only. Elevation is android only
const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 75,
        paddingTop: 30,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 5,
        position: 'relative'
    },
    textStyle: {
        fontSize: 30
    }
};

export default Header;