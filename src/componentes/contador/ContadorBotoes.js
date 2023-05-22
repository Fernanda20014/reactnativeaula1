import React from "react";
import { Button, StyleSheet, View } from "react-native";
import Botao from "../Botao";

export default props => {
    return (
        <>
            <View style={style.Botoes}> 
            <Button title="+" onPress={props.inc}/>
            <Button title="-" onPress={props.desc}/>
            </View>
        </>
    )
}

const style =  StyleSheet.create({
    Botoes:{
     flexDirection:'row'
    }
})