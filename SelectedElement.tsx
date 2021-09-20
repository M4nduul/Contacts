import React from "react";
import { Text, View, Pressable, FlatList, useWindowDimensions, Image } from "react-native";
import { SharedElement, SharedElementProps } from "react-native-shared-element";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

type Data = {
    id: number,
    title: string,
    imgUrl: string
}

type RenderDataProps = {
    item: Data,
    index: number
}

const data = [
    {
        id: 1,
        title: 'Office',
        imgUrl: 'https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
    },
    {
        id: 2,
        title: 'Dog',
        imgUrl: 'https://images.unsplash.com/photo-1632060627931-d04513e49e8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
    },
    {
      id: 3,
        title: 'Skate', 
      imgUrl: 'https://images.unsplash.com/photo-1632060129703-809847a2bc1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
    },
    {
      id: 4,
        title: 'Girls vacation', 
      imgUrl: 'https://images.unsplash.com/photo-1632012643832-54e324e06352?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=936&q=80'
    },
    {
      id: 5,
        title: 'Morning bed', 
      imgUrl: 'https://images.unsplash.com/photo-1631970840760-61f9f630684f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80'
    },
    {
      id: 6,
        title: 'Picnic van', 
      imgUrl: 'https://images.unsplash.com/photo-1632052875697-f5907cdf5b18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80'
    },
    {
      id: 7,
        title: 'Porsche 911', 
      imgUrl: 'https://images.unsplash.com/photo-1632077622353-daeef65ef114?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80'
    },
    {
      id: 8,
        title: 'Living her best life', 
      imgUrl: 'https://images.unsplash.com/photo-1631997663439-f42f789c56f0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
    },
]

const ScreenWidth = useWindowDimensions().width
// const Stack = createSharedElem
const Stack = createSharedElementStackNavigator();

const ListScreen = ({ navigation }) => {

    const renderData = ({ item: { id, title, imgUrl }, index }: RenderDataProps) => {
        return (
            <Pressable onPress={() => { navigation.navigate('Detail')}}>
                <SharedElement id={ imgUrl }>
                    <Image source={{ uri: imgUrl }} width={ScreenWidth / 2} height={100}/>
                </SharedElement>
                <Text>{ title }</Text>
            </Pressable>

        )
    }
    
    return (
        <FlatList 
            data={data}
            renderItem={renderData}
            // keyExtractor={}
        />
    )
}

const DetailScreen = ({ navigation }) => {

    return (
        <View>
            <SharedElement></SharedElement>
        </View>
    )
}

DetailScreen.sharedElements = (route, otherRoute, showing) => [
    {id: 'image'},
    {id: 'text', animation: 'fade'},
  ];

const SelectedElement = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='List' component={ListScreen}/>
            <Stack.Screen name='Detail' component={DetailScreen}/>
        </Stack.Navigator>
    ) 

}

export default SelectedElement