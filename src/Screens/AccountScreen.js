import React from 'react';
import {StyleSheet, FlatList, View} from "react-native";
import Screen from "../components/Screen";
import {ListItem, ListItemSeparator} from "../components/lists";
import colors from "../config/colors";
import Icon from "../components/Icon";

const menuItems = [
    {
        title: 'My listing',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary

        }
    }, {
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: colors.secondary

        }
    }
]

function AccountScreen() {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}><ListItem title='Dani Daily'
                                                     subTitle='Bio'
                                                     image={require('../assets/profileround.png')}>

            </ListItem></View>
            <View style={styles.container}>
                <FlatList data={menuItems}
                          keyExtractor={menuItem => menuItem.title}
                          ItemSeparatorComponent={ListItemSeparator}
                          renderItem={({item}) =>
                              <ListItem title={item.title}
                                        IconComponent={<Icon name={item.icon.name}
                                                             backgroundColor={item.icon.backgroundColor}/>
                                        }/>
                          }/></View>
            <ListItem title='Log out' IconComponent={<Icon name='logout' backgroundColor='#ffe66d'/>}/>
        </Screen>
    );
}

export default AccountScreen;

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light
    },
    container: {
        marginVertical: 20
    }
})