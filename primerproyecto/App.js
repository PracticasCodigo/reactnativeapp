/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Mensaje = props => {
  return (
    <View>
      <Text>{props.str}</Text>
    </View>
  );
};

const App: () => Node = () => {
  const [count, setCount] = useState(0);

  // este use Effect se va a ejecutar solamente cuando se inicie el sistema
  useEffect(() => {
    console.log('inicia el sistema');
  }, []);

  // este use Effect se va a ejecutar solamebte cuando cambie el valor de count
  useEffect(() => {
    console.log(`el valor de Count es : ${count}`);
  }, [count]);

  return (
    <SafeAreaView>
      <ScrollView>
        <Mensaje />
        <Button
          onPress={() => {
            setCount(count + 1);
          }}
          color="#841584"
          title={'count: ' + count}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
