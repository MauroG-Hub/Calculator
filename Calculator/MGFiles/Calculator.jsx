import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableHighlight  } from 'react-native';
import { buttons, styles } from './Styles';
import React , {useState} from 'react';
import { NumberPressed, BackPressed, ClearPressed, AddPressed, MinusPressed, MulPressed, DivPressed, EqualPressed, PercentPressed, PointPressed } from './Functions';

let Result=0;


const Calculator = () => {
  const [text, setText] = useState('0');
    return (
   <View style={styles.containerCalc}>
    <Image
        style={styles.CalcImg}
        source={require('../assets/Calc-enhanced.jpg')}
        resizeMode="stretch"
      />
      <Text style={buttons.Result}>{text}</Text>
      <TouchableHighlight style={[buttons.number, buttons.Cero]} onPress={() => setText(Result = NumberPressed(0,'0'))}>
        <Text style={buttons.numberText}>  </Text>
      </TouchableHighlight>
      <TouchableHighlight style={[buttons.number, buttons.Point]} onPress={() => setText(Result = PointPressed())}>
        <Text style={buttons.numberText}>  </Text>
      </TouchableHighlight>
      <TouchableHighlight style={[buttons.number, buttons.Equal]} onPress={() => setText(Result = EqualPressed())}>
        <Text style={buttons.numberText}>  </Text>
      </TouchableHighlight>
      <TouchableHighlight style={[buttons.number, buttons.Add]} onPress={() => setText(Result = AddPressed())}>
        <Text style={buttons.numberText}>  </Text>
      </TouchableHighlight>
      <TouchableHighlight style={[buttons.number, buttons.One]} onPress={() => setText(Result = NumberPressed(1,'1'))}>
        <Text style={buttons.numberText}>  </Text>
      </TouchableHighlight>
      <TouchableHighlight style={[buttons.number, buttons.Two]} onPress={() => setText(Result = NumberPressed(2,'2'))}>
        <Text style={buttons.numberText}>  </Text>
      </TouchableHighlight>
      <TouchableHighlight style={[buttons.number, buttons.Three]} onPress={() => setText(Result = NumberPressed(3,'3'))}>
        <Text style={buttons.numberText}>  </Text>
      </TouchableHighlight>
      <TouchableHighlight style={[buttons.number, buttons.Four]} onPress={() => setText(Result = NumberPressed(4,'4'))}>
        <Text style={buttons.numberText}>  </Text>
      </TouchableHighlight>
      <TouchableHighlight style={[buttons.number, buttons.Five]} onPress={() => setText(Result = NumberPressed(5,'5'))}>
        <Text style={buttons.numberText}>  </Text>
      </TouchableHighlight>
      <TouchableHighlight style={[buttons.number, buttons.Six]} onPress={() => setText(Result = NumberPressed(6,'6'))}>
        <Text style={buttons.numberText}>  </Text>
      </TouchableHighlight>
      <TouchableHighlight style={[buttons.number, buttons.Minus]} onPress={() => setText(Result = MinusPressed())}>
        <Text style={buttons.numberText}>  </Text>
      </TouchableHighlight>
      <TouchableHighlight style={[buttons.number, buttons.Seven]} onPress={() => setText(Result = NumberPressed(7,'7'))}>
        <Text style={buttons.numberText}>  </Text>
      </TouchableHighlight>
      <TouchableHighlight style={[buttons.number, buttons.Eight]} onPress={() => setText(Result = NumberPressed(8,'8'))}>
        <Text style={buttons.numberText}>  </Text>
      </TouchableHighlight>
      <TouchableHighlight style={[buttons.number, buttons.Nine]} onPress={() => setText(Result = NumberPressed(9,'9'))}>
        <Text style={buttons.numberText}>  </Text>
      </TouchableHighlight>
      <TouchableHighlight style={[buttons.number, buttons.Mul]} onPress={() => setText(Result = MulPressed())}>
        <Text style={buttons.numberText}>  </Text>
      </TouchableHighlight>
      <TouchableHighlight style={[buttons.number, buttons.Clear]} onPress={() => setText(Result = ClearPressed())}>
        <Text style={buttons.numberText}>  </Text>
      </TouchableHighlight>
      <TouchableHighlight style={[buttons.number, buttons.Back]} onPress={() => setText(Result = BackPressed())}>
        <Text style={buttons.numberText}>  </Text>
      </TouchableHighlight>
      <TouchableHighlight style={[buttons.number, buttons.Percent]} onPress={() => setText(Result = PercentPressed())}>
        <Text style={buttons.numberText}>  </Text>
      </TouchableHighlight>
      <TouchableHighlight style={[buttons.number, buttons.Div]} onPress={() => setText(Result = DivPressed())}>
        <Text style={buttons.numberText}>  </Text>
      </TouchableHighlight>

   </View>
    );
  }
  export default Calculator;
  
  