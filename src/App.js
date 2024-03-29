import React from "react"
import{Text, View, StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
// import Primeiro from "./componentes/Primeiro"
// import Of,{Comp1,Comp2} from './componentes/MultiplosComponentes'
// import MinMax from "./componentes/MinMax"
// import Aleatorio from "./componentes/Aleatorio"
//import Titulo from "./componentes/Titulo"
//import Botao from "./componentes/Botao"
//import Contador from "./componentes/Contador"
//import Pai from "./componentes/direta/Pai"
//import Pai from "./componentes/indireta/Pai"
//import ContadorDisplay from "./componentes/contador/ContadorDisplay"
//import ContadorV2 from "./componentes/contador/ContadorV2"
import HomeScreen from "./componentes/HomeScreens"
import DetailsScreen from "./componentes/DetailsScreen"


const Stack = createNativeStackNavigator()

    export default () =>(

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Details" component={DetailsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>

       // <View style={styles.TelaIniciante}>
            //<ContadorV2/>
           /* <Contador inicial={100}/> */
            /* <Pai/> */

            /* <Botao/>
            <Titulo principal= "Cadastro Produto"
                    secundario="Tela de Casdastro"/>
            <Primeiro />
            <Text>1 + 2</Text>
            <Text>O valor da soma de 1 + 2 = {1 + 2}</Text>
            <Comp1 />
            <Comp2 />
            <Of/>
            <MinMax min="3" max="20"/>
            <MinMax min="5" max="40"/>
            <MinMax min="7" max="55"/>
           <Aleatorio mino="2" maxo="10"/>
            <Aleatorio mino="5" maxo="40"/>
            <Aleatorio mino="7" maxo="55"/> */
        //</View>
    )
    

    // export default App

    const styles = StyleSheet.create({
        TelaIniciante: {
           flexGrow: 1 ,
           justifyContent: "center",
           alignItems: "center",
           padding: 20
        }
    })

    // Lista de comentarios 

    
    // function App(){
    //    const jsx = <Text>Jailton Silva dos Anjos Junior</Text>
    //    return jsx
    // }

    // const App = function () {
    //     return <Text>Component 2</Text>
    // }

    // export default function() {
    //     return <Text>Component 3</Text>
    // }

    // export default () => {
    //     return <Text>Component 4</Text>
    // }