import styled from "styled-components/native";
import { theme } from "../../theme";


export const Container = styled.View`
  align-items: center ;
`;

export const Image = styled.Image`
  width: 36px;
  height: 36px;
  margin-top: 42px;
`;

export const Title = styled.Text`
  font-size: 20px;
  margin-bottom: 24px;
  font-family: ${theme.fonts.medium};
  color: ${theme.colors.text_primary};

`;

export const Button = styled.TouchableOpacity`
  height: 40px;
  background-color: ${theme.colors.surface_secondary};
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  margin-bottom: 56px;
`;


export const ButtonTitle = styled.Text`
  font-size: 14px;
  font-family: ${theme.fonts.medium};
  color: ${theme.colors.text_secondary};
`;