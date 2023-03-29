import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { StatusBar } from 'react-native';

const statusBarColor = StatusBar.backgroundColor;

const { width, height } = Dimensions.get('window');

const ReSizeH = (Pixels) => {
    let NewSize = Pixels*1000/height;
    return  NewSize < Pixels ? NewSize : Pixels;
  }

const HPercent = (Percent) => {
    return (Percent*height)/100;
  }
  
const WPercent = (Percent) => {
    return (Percent*width)/100;
  }

const Pos = {
    Row1: HPercent(86.5) - HPercent(1.25),
    Row2: HPercent(73.5) - HPercent(1.25),
    Row3: HPercent(61.0) - HPercent(1.25),
    Row4: HPercent(48.5) - HPercent(1.25),
    Row5: HPercent(37.2) - HPercent(1.25),
    Row1B: HPercent(79) - HPercent(1.25),
    Col1: WPercent(12.4) - WPercent(1.25),
    Col2: WPercent(35.6) - WPercent(1.25),
    Col3: WPercent(57.6) - WPercent(1.25),
    Col4: WPercent(80.1) - WPercent(1.25),
  
  }

export const styles = StyleSheet.create({
    Startcontainer: {
        flex: 1,
        height: height,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
    container: {
        flex: 1,
        height: height,
        backgroundColor: '#b3fbb3ff',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
      image: {
        width: ReSizeH(200),
        height: ReSizeH(200),
        marginBottom: ReSizeH(70),
        borderRadius: 40,
        overflow: 'hidden',
      },
      button: {
        backgroundColor: 'black',
        paddingHorizontal: 100,
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: ReSizeH(200),
      },
      buttonText: {
        color: '#00FF01',
        fontSize: ReSizeH(24),
      },
      title: {
        fontSize: ReSizeH(30),
        fontWeight: 'normal',
        justifyContent: 'flex-start',
        paddingTop: ReSizeH(90),
        
      },
      subtitle: {
        fontSize: ReSizeH(40),
        fontWeight: 'bold',
        justifyContent: 'flex-start',
        marginBottom: ReSizeH(10),
      },
      footer: {
        fontSize: ReSizeH(15),
        fontWeight: 'normal',
        justifyContent: 'flex-start',
        marginBottom: ReSizeH(15),
      },
      CalcImg: {
        flex: 1,
        width: width+10,
        height: height,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        borderRadius: 40,
        overflow: 'hidden',
        position: 'relative',
    
      },
      containerCalc: {
        flex: 1,
        height: height,
        backgroundColor: '#000',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      },
    
});

export const buttons = StyleSheet.create({
    number: {
      backgroundColor: 'transparent',
      padding: HPercent(2.5),
      borderRadius: 200,
      position: 'absolute',
      underlayColor: 'green',
      color: 'gray',
      alignItems: 'center',
      
    },
    numberText: {
      color: 'black',
      fontSize: ReSizeH(24),
    },
    Result: {
      backgroundColor: 'transparent',
      position: 'absolute',
      color: 'black',
      fontSize: HPercent(4),
      top: HPercent(12),
      left: WPercent(7),
      width: WPercent(87),
      height: HPercent(15),
      textAlign: 'right',
      justifyContent: 'flex-end',
    },
    Cero: {
      top: Pos.Row1,
      left: Pos.Col1,
    },
    Point: {
      top: Pos.Row1,
      left: Pos.Col2,
    },
    Equal: {
      top: Pos.Row1,
      left: Pos.Col3,
    },
    Add: {
      top: Pos.Row1B,
      left: Pos.Col4,
    },
    One: {
      top: Pos.Row2,
      left: Pos.Col1,
    },
    Two: {
      top: Pos.Row2,
      left: Pos.Col2,
    },
    Three: {
      top: Pos.Row2,
      left: Pos.Col3,
    },
    Four: {
      top: Pos.Row3,
      left: Pos.Col1,
    },
    Five: {
      top: Pos.Row3,
      left: Pos.Col2,
    },
    Six: {
      top: Pos.Row3,
      left: Pos.Col3,
    },
    Minus: {
      top: Pos.Row3,
      left: Pos.Col4,
    },
    Seven: {
      top: Pos.Row4,
      left: Pos.Col1,
    },
    Eight: {
      top: Pos.Row4,
      left: Pos.Col2,
    },
    Nine: {
      top: Pos.Row4,
      left: Pos.Col3,
    },
    Mul: {
      top: Pos.Row4,
      left: Pos.Col4,
    },
    Clear: {
      top: Pos.Row5,
      left: Pos.Col1,
    },
    Back: {
      top: Pos.Row5,
      left: Pos.Col2,
    },
    Percent: {
      top: Pos.Row5,
      left: Pos.Col3,
    },
    Div: {
      top: Pos.Row5,
      left: Pos.Col4,
    },

});
