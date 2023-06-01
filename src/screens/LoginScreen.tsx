import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { Header } from '../components/Header';
import ScreenContainer from '../components/ScreenContainer';

export default function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <ScreenContainer additionalStyle={styles.container}>
      <StatusBar style="auto" />
      <Header title='spacecraft'/>
      <View style={styles.form}>
        <TextInput
          label='Email'
          keyboardType='email-address'
          value={email}
          onChangeText={(value) => {setEmail(value)}}
        />
        <TextInput
          label='Password'
          value={password}
          onChangeText={(value) => {setPassword(value)}}
          secureTextEntry = {!showPassword}
          right={<TextInput.Icon icon={showPassword ? 'eye-off' : 'eye'} onPress={handleShowPassword}/>}
        />
        <Button mode='contained'>Login</Button>
        <Text variant="labelMedium" style={styles.terms}>Read Terms and conditions.</Text> 
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    height: 280,
    padding: 20,
    width: '100%',
    display: 'flex',
    gap: 20,
  },
  terms: {
    textAlign: 'center',
  },
});
