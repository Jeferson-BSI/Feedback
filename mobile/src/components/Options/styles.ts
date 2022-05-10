import styled from 'styled-components/native';
import { theme } from '../../theme';


export const Container = styled.View`
  align-items: center ;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: center;

  width: 100%;
  margin-bottom: 48px;
`;

export const Title = styled.Text`
  font-size:20px;
  margin-bottom: 32px;
  font-family: ${theme.fonts.medium};
  color: ${theme.colors.text_primary}
`;