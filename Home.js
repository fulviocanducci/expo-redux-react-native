import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { counterConstants } from './stores/reducers/count';

function ViewButton({ title, onPress, style }) {
  return (
    <View style={style}>
      <Button onPress={onPress} title={title} />
    </View>
  );
}

function Home() {
  const [payload, setPayload] = useState('0');
  const value = useSelector(x => x.counter.value);
  const dispatch = useDispatch();
  const handleDispatchIncrement = () => {
    dispatch({ type: counterConstants.INCREMENT });
  };
  const handleDispatchDecrement = () => {
    dispatch({ type: counterConstants.DECREMENT });
  };
  const handleDispatchChange = () => {
    dispatch({ type: counterConstants.CHANGE, payload });
  };
  const handleDispatchInitialValue = () => {
    dispatch({ type: counterConstants.INITIAL });
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={payload}
        style={styles.textInput}
        onChangeText={e => setPayload(parseInt(e))}
        autoCapitalize={false}
        autoCompleteType={'off'}
        keyboardType={'numeric'}
      />
      <Text>{value}</Text>

      <ViewButton
        title="Increment"
        onPress={handleDispatchIncrement}
        style={styles.viewButton}
      />
      <ViewButton
        title="Decrement"
        onPress={handleDispatchDecrement}
        style={styles.viewButton}
      />
      <ViewButton
        title="Change"
        onPress={handleDispatchChange}
        style={styles.viewButton}
      />
      <ViewButton
        title="Initial Value"
        onPress={handleDispatchInitialValue}
        style={styles.viewButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    alignSelf: 'stretch',
    margin: 10,
    borderColor: '#efefef',
    borderWidth: 1,
    height: 54,
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0
    },
    elevation: 1.6,
    shadowRadius: 20,
    padding: 15,
    textAlign: 'center'
  },
  viewButton: {
    margin: 5,
    width: '95%'
  }
});

export default Home;