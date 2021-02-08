import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import defaultStyles from "../config/styles";
import * as ImagePicker from "expo-image-picker";

function ImageInput({icon, width = '100%', height = '100%'}) {
    const [imageUri, setImageUri] = useState();
    const requestPermission = async () => {
        const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync()//when we give the permission (using await)
        //if access granted (если получен доступ)
        if (!granted) {
            alert('You need to enable permission to access the library')
        }
    }

    //componentDidMount = useEffect
    useEffect(() => {
        requestPermission();
    }, []) //empty dependencies = render only once
    //in useEffect we cannot return the promise, so we move it to a function

    //async() - ассинхронная функция, которая ждет объект await (в нашем случае
    //selectImage ждет выбора фото
    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync();
            //result.cancelled - if image is not selected return true
            //result.uri - get uri
            if (!result.cancelled)
                setImageUri(result.uri)


        } catch (error) {
            console.log('Error reading an image', error)
        }
    }

    return (
        <TouchableOpacity style={[styles.container, {width, height}]} onPress={selectImage}>
            {icon && (
                <MaterialCommunityIcons
                    name={icon}
                    size={40}
                    color={defaultStyles.colors.medium}
                    style={styles.icon}
                />

            )}

        </TouchableOpacity>
    )
}

export default ImageInput;
const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center'
    }, icon: {
        marginVertical: 10
    }


});