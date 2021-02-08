import React, {useEffect, useState} from 'react';

import * as ImagePicker from 'expo-image-picker'


import ImageInput from "./src/components/ImageInput";
import Screen from "./src/components/Screen";


//switch - переключатель
//при нажатии изменяем isNew


export default function App() {

    return (
        <Screen>
            {/*<Button title="Select Image" onPress={selectImage}/>
            <Image source={{uri: imageUri}} style={{width: 100, height: 100}}/>*/}
            <ImageInput icon="camera" width={120} height={120}/>

        </Screen>
    );
}
