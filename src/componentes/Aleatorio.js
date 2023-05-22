import React from "react";
import { Text } from "react-native";


function gerarNumeroAleatorio (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  var numeroAleatorio = gerarNumeroAleatorio(1, 10);
  console.log(numeroAleatorio);
  
export default props  => {
    return(
        <Text>{gerarNumeroAleatorio(props.mino, props.maxo)}</Text>
    )
}
  