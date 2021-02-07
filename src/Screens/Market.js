import React from 'react';
import {View} from "react-native";

import Card from "../components/Card";

import colors from '../config/colors'

function Market() {
    return (
        <View style={{backgroundColor: colors.white, padding: 20, paddingTop: 100}}>
            <Card title="Jacket"
                  subTitle='100$'
                  image={require('../assets/jacket.jpg')}/>

        </View>
    );
}

export default Market;