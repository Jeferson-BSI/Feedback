import styled from 'styled-components/native';
import { theme } from '../../theme';

export const Container = styled.View`
  padding: 0px 24px;
  align-items: center ;
`;


export const Header = styled.View`
  flex-direction: row;
  margin: 15px 0px;
`;
export const BackButton = styled.TouchableOpacity``;


export const TitleContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-right: 24px;
`;


export const Image = styled.Image`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;



export const Title = styled.Text`
  font-size: 20px;
  font-family: ${theme.fonts.medium};
  color: ${theme.colors.text_primary};
`;

export const TextInput = styled.TextInput`
  height: 112px;
  padding: 12px;
  margin-bottom: 8px;
  border-radius: 4px ;
  border-width: 1px;
  border-color: ${theme.colors.stroke};
  color: ${theme.colors.text_primary};
  font-family: ${theme.fonts.regular};
`;


export const Footer = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
`;
