import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [countb, setCountb] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
    
  };
  
  const incrementCountb = () => {
    setCountb(countb + 1);
    
  };
  
  const zerar = () => {
    setCount(0);
    setCountb(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Time a</Text>
      <Text style={styles.title}>Time b</Text>
      <Text style={styles.count}>{count}</Text>
      <Text style={styles.count}>{countb}</Text>
      <Button title="TIME A" onPress={incrementCount} />
      
      <Button title="Zerar" onPress={zerar} />
      <Button title="TIME B" onPress={incrementCountb} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  count: {
    fontSize: 30,
    marginBottom: 20,
  },
});
