import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from "react-native";
import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";

import {ListItemSeparator, ListItemDeleteAction} from '../components/lists'

const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/profileround.png')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/profileround.png')
    }
]

function MessagesScreen() {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);
    const handleDelete = message => {
        //Delete the message from messages
        //get all messages except message
        setMessages(messages.filter(m => m.id !== message.id))
        //пройти через весь массив сообщений и  вернуть все сообщения, id которых не равен id message

    }
    return (
        <Screen>
            <FlatList data={messages}
                      keyExtractor={message => message.id.toString()}
                      renderItem={({item}) => <ListItem title={item.title}
                                                        subTitle={item.description}
                                                        image={item.image}
                                                        onPress={() => alert('Message selected')}
                                                        renderRightActions={() => <ListItemDeleteAction
                                                            onPress={() => handleDelete(item)}/>}/>}
                      ItemSeparatorComponent={ListItemSeparator}
                      refreshing={refreshing} //
                      onRefresh={() => {
                          setMessages([
                              {
                                  id: 2,
                                  title: 'T2',
                                  description: 'D2',
                                  image: require('../assets/profileround.png')
                              } //когда перезагружаем страницу, возвращаем функцию
                          ])
                      }}/>

        </Screen> //ItemSeparatorComponent добавляет разделитель, но не после последнего компонента в списке
        //handleItem удаляет item(message), которое мы в него передаем.
    )
        ;
}

export default MessagesScreen;
const styles = StyleSheet.create({})