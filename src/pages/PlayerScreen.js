import * as React from 'react';
import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import Slider from '@react-native-community/slider';
import AntDesign from 'react-native-vector-icons/AntDesign';


function Example() {

          return (
                    <View >

                              <Image source={require('../assets/images/music.jpg')} alt="Alternate_Text" style={styles.bottom} />
                              <View style={styles.textStyle}>
                                        <Text style={styles.textTitle}>Song Title</Text>
                                        <Text style={styles.textName}>Song Artist Name</Text>
                              </View>
                              <View>
                                        <Slider
                                                  style={{ width: 320, height: 40 }}
                                                  minimumValue={0}
                                                  maximumValue={1}
                                                  minimumTrackTintColor="#4FCCDD"
                                                  maximumTrackTintColor="#000000"
                                        />
                                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }}>
                                                  <Text>0:00</Text>
                                                  <Text>5:00</Text>
                                        </View>
                              </View>
                              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: 'center', textAlign: "center" }}>
                                        <View style={styles.controls}>
                                                  <AntDesign name="stepbackward" style={{ fontSize: 35 }} />
                                                  <AntDesign name="playcircleo" style={{ fontSize: 45 }} />
                                                  <AntDesign name="stepforward" style={{ fontSize: 35 }} />
                                        </View>

                              </View>

                    </View>



          )
}

const PlayerScreen = () => {
          return (

                    <View style={styles.imageStyle}>

                              <Example />

                    </View>




          )
}

const styles = StyleSheet.create({
          imageStyle: {
                    // flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 80,
                    textAlign: "center"
          },
          bottom: {
                    height: 350,
                    width: 320,
                    borderRadius: 10,
                    shadowColor: '#171717',
                    shadowOpacity: 0.2,
                    shadowRadius: 3,
          },
          textStyle: {
                    textAlign: "center",
                    marginVertical: 10,
          },
          textTitle: {
                    textAlign: "center",
                    fontSize: 20,

          },
          textName: {
                    textAlign: "center",
                    fontSize: 22,
                    fontWeight: "bold"
          },
          controls: {
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "60%"
          }



});


export default PlayerScreen