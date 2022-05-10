import styled from "styled-components/native";
import { theme } from "../../theme";
import { StyleSheet } from "react-native";

export const Container = styled.TouchableOpacity`
  width: 40px ;
  height: 40px ;
  border-radius: 4px ;
  background-color: ${theme.colors.surface_secondary};
  justify-content: center;
  align-items: center;
  margin-right:8px ;
  position: relative;

`;

export const styles =  StyleSheet.create({ 
  RemoveIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  }
})


export const Image = styled.Image`
  width: 40px;
  height: 40px;
`;
