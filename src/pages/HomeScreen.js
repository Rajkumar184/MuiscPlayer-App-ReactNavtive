import React, { useRef } from 'react';
import { Text, View, SafeAreaView, FlatList, StyleSheet, StatusBar } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import UserAvatar from 'react-native-user-avatar';
import ActionSheet from 'react-native-actionsheet'

const DATA = [
          {
                    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
                    name: 'First Item',
                    title: "The magic of thing big......"
          },
          {
                    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
                    name: 'Second Item',
                    title: "The lion king king king....."

          },
          {
                    id: '58694a0f-3da1-471f-bd96-145571e29d72',
                    name: 'Third Item',
                    title: "The magic of thing big....."
          },
          {
                    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
                    name: 'First Item',
                    title: "The magic of thing big......"
          },
          {
                    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
                    name: 'Second Item',
                    title: "The magic of thing big....."

          },
          {
                    id: '58694a0f-3da1-471f-bd96-145571e29d72',
                    name: 'Third Item',
                    title: "The magic of thing big....."
          },
          {
                    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
                    name: 'First Item',
                    title: "The magic of thing big......"
          },
          {
                    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
                    name: 'Second Item',
                    title: "The magic of thing big....."

          },
          {
                    id: '58694a0f-3da1-471f-bd96-145571e29d72',
                    name: 'Third Item',
                    title: "The magic of thing big....."
          },
          {
                    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
                    name: 'First Item',
                    title: "The magic of thing big......"
          },
          {
                    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
                    name: 'Second Item',
                    title: "The magic of thing big....."

          },
          {
                    id: '58694a0f-3da1-471f-bd96-145571e29d72',
                    name: 'Third Item',
                    title: "The magic of thing big....."
          },
          {
                    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
                    name: 'First Item',
                    title: "The magic of thing big......"
          },
          {
                    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
                    name: 'Second Item',
                    title: "The magic of thing big....."

          },
          {
                    id: '58694a0f-3da1-471f-bd96-145571e29d72',
                    name: 'Third Item',
                    title: "The magic of thing big....."
          },
];

const Item = ({ name, title }) => {

          const actionSheetRef = useRef();

          const handlePress = () => {
                    actionSheetRef.current.show();
          };

          return (
                    <View style={styles.item}>

                              <UserAvatar size={50} bgColor="#000" name={name} />
                              <View>
                                        <Text style={styles.title}>{title}</Text>
                                        <Text>5:38</Text>
                              </View>

                              <Entypo name="dots-three-vertical" style={{ fontSize: 20 }} onPress={handlePress} />
                              <ActionSheet
                                        ref={actionSheetRef}
                                        // title={'Select ?'}
                                        options={['Add to Playlist', 'cancel', 'View Details']}
                                        cancelButtonIndex={2}
                                        destructiveButtonIndex={1}
                                        overlayColor="#00000077"
                                        onPress={(index) => { /* do something */ }}
                              // styles={{
                              //           titleBox: { borderRadius: 10 },
                              //           messageBox: { borderRadius: 10 },
                              //           buttonBox: { borderRadius: 10 },
                              //           cancelButtonBox: { borderRadius: 10 }
                              // }}

                              />

                    </View>
          )
}







const HomeScreen = () => {
          const renderItem = ({ item }) => (
                    <Item title={item.title} />
          );

          return (
                    <SafeAreaView style={styles.container}>
                              <FlatList
                                        data={DATA}
                                        renderItem={renderItem}
                                        keyExtractor={item => item.id}
                              />
                    </SafeAreaView>



          )

}


const styles = StyleSheet.create({
          container: {
                    flex: 1,
                    paddingHorizontal: 18
          },
          item: {
                    textAlign: 'center',
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: 'center',
                    marginTop: 8,
          },
          title: {
                    fontSize: 18,
          }
});

export default HomeScreen