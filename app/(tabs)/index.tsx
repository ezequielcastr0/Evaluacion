import React, { useState } from 'react';


// **Esta línea importa el hook useState de React, que permite manejar el estado de la
import { StyleSheet, View, Button, Text, TextInput } from 'react-native';
// **Se importan componentes básicos de React Native como View, Button, Text, TextInput,etc.**


import Slider from '@react-native-community/slider';



export default function HomeScreen() {
const [greeting, setGreeting] = useState('¡Igresa una frase!');
// **Se define el estado greeting para almacenar el saludo, y se inicializa con "¡Hola,Alumno!"**
const [nombre, setNombre] = useState('');
const [primero, setQuoteIndex] = useState(0);
const [colorF, setQuoteIndexx] = useState(0);
const [fontSize, setFontSize] = useState(24);
// **Se define el estado nombre, que almacenará el nombre que el usuario ingrese.**
// *** INICIO DE LA MODIFICACIÓN ***
const [bgColor, setBgColor] = useState('#fff'); // Estado para el color de fondo
// **Se define el estado bgColor, que se utilizará para cambiar dinámicamente el color defondo.**


const FrasesYcolor = [
  { color: 'red', text: '"La pasión es el combustible que enciende tus sueños. ¡No dejes que nadie apague tu fuego!"' },
  { color: 'green', text: '“El primer verde de la naturaleza es el oro”. Robert Frost.' },
  { color: 'blue', text: '“El sol está alto, el cielo es azul; Es hermoso, y tú también”. – John Lennon.' },
  { color: 'orange', text: '"La energía positiva transforma los obstáculos en oportunidades. ¡Brilla con tu luz naranja!"' },
];
const colores = [
  { color: 'red' },
  { color: 'green' },
  { color: 'blue' },
  { color: 'orange' },
  {color:  'white' },
  {color:  'yellow' },
  {color:  'purple' },
];


const CambiarcoloryFrase= () => {
  const siguiente = (primero + 1) % FrasesYcolor.length;
  setBgColor(FrasesYcolor[siguiente].color);
  setGreeting(FrasesYcolor[siguiente].text);
  setQuoteIndex(siguiente);
};
const Cambiarcolor= () => {
  const siguienteColor = (colorF + 1) % colores.length;
  setBgColor(colores[siguienteColor].color);
  setQuoteIndexx(siguienteColor);
};


return (
<View style={[styles.container, { backgroundColor: bgColor }]}>


<Text style={[styles.greetingText, { fontSize }]}>
{greeting}
</Text>


<TextInput
style={styles.input}
placeholder="Escribe aca la frase"
value={nombre}
onChangeText={(text) => setNombre(text)}
/>
<Button
 title="Te recomiendo una frase"
 onPress={() => {
  setGreeting(`¡tu frase! ${nombre}!`);
  CambiarcoloryFrase();
}
}



/>
<Button
 title="Ingresa tu frase"
 onPress={() => {
  setGreeting(`¡tu frase! ${nombre}!`);
  Cambiarcolor();
}
}



/>

<Text>Tamaño del Texto</Text>
<Slider
style={styles.slider}
minimumValue={10}
maximumValue={40}
step={1}
value={fontSize}
onValueChange={(value) => setFontSize(value)}
/>

<View style={styles.buttonContainer}>
<Button title="rojo" onPress={() => {
  setBgColor('red');
  setGreeting('"La pasión es el combustible que enciende tus sueños. ¡No dejes que nadie apague tu fuego!"¡Has elegido rojo!');
  } } />
{/* **Este botón cambia el color de fondo a rojo cuando se presiona.** */}
<Button title="Verde" onPress={() =>{
   setBgColor('green');
   setGreeting(' “El primer verde de la naturaleza es el oro”. Robert Frost.¡Has elegido verde!');
}} />
{/* **Este botón cambia el color de fondo a verde cuando se presiona.** */}
<Button title="Azul" onPress={() => {
  setBgColor('blue');
  setGreeting(' “El sol está alto, el cielo es azul; Es hermoso, y tú también”. – John Lennon ¡Has elegido Azul!');

}}/>
{/* **Este botón cambia el color de fondo a azul cuando se presiona.** */}
<Button title="Naranja" onPress={() => { setBgColor('orange')
setGreeting('"La energía positiva transforma los obstáculos en oportunidades. ¡Brilla con tu luz naranja!" ¡Has elegido Naranja!');
}} />

</View>


</View>


);
}
const styles = StyleSheet.create({
container: {
 


flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
greetingText: {
fontSize: 24,
marginBottom: 10,
},
input: {
height: 40,
borderColor: 'gray',
borderWidth: 1,
width: 200,
paddingHorizontal: 10,
marginBottom: 20,
},

buttonContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
width: '60%',
},
slider: {
    width: 300,
    height: 40,
    marginVertical: 20,
    },


});
