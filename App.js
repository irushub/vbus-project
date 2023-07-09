import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Image, Text } from 'react-native';

export default function App() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleSubmit = () => {
    if (!from || !to) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    let busNumber = '';

    if (from === 'VIT' && to === 'Tambaram') {
      busNumber = '515B';
    } else {
      busNumber = 'Unknown';
    }

    Alert.alert('Bus Number', busNumber);

    setFrom('');
    setTo('');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#89bdbb', padding: 20 }}>
      <View style={{ alignItems: 'center' }}>
        <Image
          source={require('./busimg.png')} // Replace with the actual path to your image
          style={{ width: '100%', height: 200, marginBottom: 20 }} // Adjust the width, height, and margin as needed
          resizeMode="contain" // Adjust the resizeMode as needed
        />
        <Text style={{ fontSize: 24, fontFamily: 'Roboto', textAlign: 'center', fontWeight:"bold" }}>VBus</Text>
      </View>
      <View style={{ backgroundColor: '#6e6659', padding: 20, borderRadius: 5 }}>
        <TextInput
          placeholder="From"
          value={from}
          onChangeText={(text) => setFrom(text)}
          style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderRadius: 5 }}
        />
        <TextInput
          placeholder="To"
          value={to}
          onChangeText={(text) => setTo(text)}
          style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderRadius: 5 }}
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
}
