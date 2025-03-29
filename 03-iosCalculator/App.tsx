import {StatusBar, View} from 'react-native';
import {CalculatorScreen} from './src/presentation/screens/CalculatorScreen';
import {globalStyle} from './src/config/theme/app-theme';

function App(): React.JSX.Element {
  return (
    <View style={globalStyle.background}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <CalculatorScreen />
    </View>
  );
}

export default App;
