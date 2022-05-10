import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../theme';

export const Container = styled.TouchableOpacity`
  align-items: center ;
  justify-content: center;

  width: 104px;
  height: 112px;
  padding: 8px;
  border-radius: 8px;
  margin: 0 8px;
  background-color: ${theme.colors.surface_secondary}
`;


export const Image = styled.Image`
  width: 40px;
  height: 40px;
`;


export const Title = styled.Text`
  font-size: 14px;
  margin-top: 8px;
  font-family: ${theme.fonts.medium};
  color: ${theme.colors.text_primary}
`;