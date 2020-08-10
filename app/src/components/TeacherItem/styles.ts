import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #FFF;
  border: 1px solid #e6e6f0;
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
  margin: 24px;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
`
export const ImageProfile = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #CCC;

`
export const ProfileInfo = styled.View`

  margin-left: 16px;

`

export const Nome = styled.Text`
  font-family: Archivo_700Bold;
  color: #32264D;
  font-size: 20px;

`

export const Materia = styled.Text`
  font-family: Poppins_400Regular;
  color: #6a6180;
  font-size: 12px;
  margin-top: 4px;
`
export const Bio = styled.Text`
  margin: 0 24px;
  font-family: Poppins_400Regular;
  font-size: 14px;
  line-height: 24px;
  color: #6a6180;
  
`
export const Footer = styled.View`
  background: #FFF;
  padding: 24px;
  align-items: center;
  margin-top: 24px;

`
export const Price = styled.Text`
  font-family: Poppins_400Regular;
  color: #6a6180;
  font-size: 14px;

`
export const PriceValue = styled.Text`
  font-family: Archivo_700Bold;
  color: #8257E5;
  font-size: 16px;
  

`
export const Buttons = styled.View`
  flex-direction: row;
  margin-top: 16px;
  align-items: center;
`
interface FavoriteProps {
  favorited: boolean;
}
export const FavoriteButton = styled(RectButton) <FavoriteProps>`
  background:${props => props.favorited ? '#e33d3d' : ' #8257E5'};
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-right: 8px;
`
export const Button = styled(RectButton)`
  background: #04d361;
  flex: 1;
  flex-direction: row;
  height: 56px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-right: 8px;

`
export const ButtonText = styled.Text`
  color: #FFF;
  font-family: Archivo_700Bold;
  font-size: 16px;margin-left: 16px;
`