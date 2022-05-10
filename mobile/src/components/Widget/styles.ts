import styled from 'styled-components/native';
import { theme } from '../../theme';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import BottomSheet from '@gorhom/bottom-sheet';


export const Container = styled.View`
  flex: 1;
`;

export const ContainerChat = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.brand};

  width: 48px;
  height: 48px;
  border-radius: 24px; 

  position: absolute;
  right: 16px;
  bottom: ${getBottomSpace() + 16}px;

`;

export const BottomSheetContainer = styled(BottomSheet)`
  background-color: ${theme.colors.surface_primary};
  padding-bottom: ${getBottomSpace() + 16}px;
`;

export const Modal = {
  backgroundColor: theme.colors.surface_primary,
  paddingBottom: getBottomSpace() + 16

}

export const indicator = {
  backgroundColor: theme.colors.text_primary,
  width: 56
}


export const ChatTeardropDotsTitle = styled.Text``;