import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import backImg from "../assets/images/arrow_left.png";
import userAvatar from "../assets/images/user.png";
import homeImg from "../assets/images/home.png";
import {BaseWrapperComponent} from "../components/baseWrapperComponent";
import TaskStore from "../store/AuthStore/taskStore";
import leftBack from "../assets/images/leftBlack.png";
import treeCarer from "../assets/images/treeCarer.png";
import {routerConstants} from "../constants/routerConstants";

const GardenS = observer(({navigation, route}: any) => {
    const {currentGarden, setGardenId, dataLastAddedTask} = TaskStore
    useEffect(() => {
        if (route.params?.id) {
            setGardenId(route.params?.id)
        }
    }, [route.params?.id])

    const [screenHeight, setScreenHeight] = useState(Dimensions.get('window').height);

    return (
        <BaseWrapperComponent isKeyboardAwareScrollView={true}>
            <View style={{
                flexDirection: 'row', alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                height: 100,
                flex: 1,
                backgroundColor: 'rgba(192,238,131,0.48)'
            }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={backImg}/>
                    <Image style={{width: 40, height: 40}} source={userAvatar}/>
                    <Text style={{marginLeft: 10}}>Nick</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={{width: 40, height: 40, marginRight: 10, borderRadius: 17}} source={homeImg}/>
                </TouchableOpacity>
            </View>
            <View style={{height: 100, backgroundColor: 'rgba(49,126,225,0.42)', borderBottomWidth: 1}}/>
            <View style={{
                height: Dimensions.get('window').height - 280, paddingTop: 20,
                backgroundColor: 'rgba(35,82,18,0.66)',
                flex: 1,
                paddingBottom: 50
            }}>

               <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', position: 'absolute', top: -40 }}>
                   {
                       currentGarden.numTask?.length && currentGarden.numTask?.map(el => {
                           return <TouchableOpacity onPress={() => navigation.navigate(routerConstants.doneTask, {params: el})} style={{
                               borderRadius: 20,
                               marginBottom: 10,
                               padding: 10,
                               alignItems: 'center'
                           }} key={el.id}>
                               <Image style={{width: 30, height: 50}} source={treeCarer}/>
                               <Text style={{ fontSize: 9, width: 30 }}>{el.description}</Text>
                           </TouchableOpacity>
                       })
                   }
               </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20, paddingHorizontal: 20, flexWrap: 'wrap'}}>
                <Text style={[styles.textImg, {fontWeight: '500', marginRight: 20}]}>{currentGarden.title}</Text>
                {
                    currentGarden.numTask?.map((el, index) => {
                        return <View key={index} style={{
                            width: 10, height: 15,
                            backgroundColor: 'rgba(18,73,25,0.35)',
                            marginHorizontal: 2, borderRadius: 10
                        }}/>
                    })
                }
                <View style={{
                    width: 10, height: 10,
                    backgroundColor: 'rgba(171,159,152,0.35)',
                    marginHorizontal: 2, borderRadius: 20
                }}/>
                <View style={{
                    width: 10, height: 10,
                    backgroundColor: 'rgba(171,159,152,0.35)',
                    marginHorizontal: 2, borderRadius: 20
                }}/>
            </View>
        </BaseWrapperComponent>
    );
});
const styles = StyleSheet.create({
    textImg: {
        textAlign: 'left',
        marginRight: 10,
        color: 'black',
        fontWeight: '700',
        fontSize: 18
    },
    container: {
        paddingTop: 20,
        backgroundColor: 'rgba(35,82,18,0.66)',
        flex: 1,
        paddingBottom: 50
    },
});

export default GardenS;
