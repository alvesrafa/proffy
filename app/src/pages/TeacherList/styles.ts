import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  flex: 1;
  background: #F0f0f7;
  
`
export const Scroll = styled.ScrollView`
  margin-top: -40px;
`

export const SearchForm = styled.View`
  margin-bottom: 8px;

`
export const Label = styled.Text`
  color: #D4c2FF;
  font-family: Poppins_400Regular;

`
export const Input = styled.TextInput`
  height: 54px;
  background: #FFF;
  border-radius: 8px;
  justify-content: center;
  padding: 0 16px;
  margin-top: 4px;
  margin-bottom: 16px;
`
export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;

`
export const InputBlock = styled.View`
  width: 48%;
`
export const SubmitButton = styled(RectButton)`
  background: #04d361;
  flex-direction: row;
  height: 56px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`
export const SubmitButtonText = styled.Text`
  color: #FFF;
  font-family: Archivo_700Bold;
  font-size: 16px;
`