import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler'
export const Container = styled.View`
  padding: 40px;
  background: #8257e5;
`;
export const TopBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const Button = styled(BorderlessButton)``

export const Title = styled.Text`
  font-size: 24px;
  font-family: Archivo_700Bold;
  color: #FFF;
  line-height: 32px;
  max-width: 160px;
  margin: 40px 0;
`
export const BottomBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
