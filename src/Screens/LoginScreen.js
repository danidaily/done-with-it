import React from 'react';
import {StyleSheet, Image} from "react-native";
import * as Yup from 'yup'
import Screen from "../components/Screen";
import {AppForm, AppFormField,SubmitButton} from '../components/forms'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
})

function LoginScreen() {

    return (
        <Screen style={styles.container}>
            <Image source={require('../assets/logo-red.png')} style={styles.logo}/>

            <AppForm initialValues={{email: '', password: ''}}
                     onSubmit={values => alert(values)}
                     validationSchema={validationSchema}>
                <AppFormField autoCapitalize='none'
                              autoCorrect={false}
                              icon='email'
                              name='email'
                              placeholder='Email'
                              textContentType='emailAddress'/>
                <AppFormField autoCapitalize='none'
                              autoCorrect={false}
                              icon='lock'
                              name='password'
                              placeholder='Password'
                              secureTextEntry
                              textContentType='password'/>
                <SubmitButton title='Login'/>
            </AppForm>

        </Screen>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    }
});