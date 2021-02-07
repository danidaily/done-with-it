import React from "react";
import {StyleSheet} from "react-native";
import * as Yup from "yup";

import {
    AppForm as Form,
    AppFormField as FormField,
    AppFormPicker as Picker,
    SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
});

const categories = [
    {label: "Furniture", value: 1, backgroundColor: 'red', icon: 'table-furniture'},
    {label: "Clothing", value: 2, backgroundColor: 'orange', icon: 'car'},
    {label: "Camera", value: 3, backgroundColor: 'yellow', icon: 'camera'},
    {label: "Games", value: 4, backgroundColor: 'green', icon: 'gamepad'},
    {label: "Clothing", value: 5, backgroundColor: 'darkcyan', icon: 'snickers'},
    {label: "Sports", value: 6, backgroundColor: 'blue', icon: 'football'},
    {label: "Movies&Music", value: 7, backgroundColor: 'darkblue', icon: 'movie'},
    {label: "Books", value: 8, backgroundColor: 'violet', icon: 'book'},
    {label: "Others", value: 9, backgroundColor: 'grey', icon: 'plus'},

];

function ListingEditScreen() {
    return (
        <Screen style={styles.container}>
            <Form
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <FormField maxLength={255} name="title" placeholder="Title"/>
                <FormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                    width={120}
                />
                <Picker items={categories}
                        name="category"
                        numberOfColumns={3}
                        PickerItemComponent={CategoryPickerItem}
                        placeholder="Category"
                        width='50%'/>
                <FormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Post"/>
            </Form>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,

    }
});
export default ListingEditScreen;
