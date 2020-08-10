import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'
export const Container = styled.View`
  flex: 1;
  background-color: #8257e5;
  justify-content: center;
  padding: 40px;
`;
export const Title = styled.Text`
  color: #FFF;
  font-size: 20px;
  line-height: 30px;
  margin-top: 80px;
  font-family: Poppins_400Regular;
`
export const TitleBold = styled.Text`
  font-family: Poppins_600SemiBold;
`
export const Buttons = styled.View`
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-between;
`
interface ButtonProps {
  background: string;
}
export const Button = styled(RectButton) <ButtonProps>`
  background: ${props => props.background ? props.background : '#333'};
  height: 150px;
  width: 48%;
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
`
export const TextButton = styled.Text`
  font-family: Archivo_700Bold;
  color: #FFF;
  font-size: 20px;

`
export const Connections = styled.Text`
  font-family: Poppins_400Regular;
  color: #d4c2ff;
  font-size: 12px;
  line-height: 20px;
  max-width: 140px;
  margin-top: 40px;
`