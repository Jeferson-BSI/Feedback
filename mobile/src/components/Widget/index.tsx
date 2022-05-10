import React, { useRef, useState } from 'react';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { ChatTeardropDots } from 'phosphor-react-native';
import BottomSheet from '@gorhom/bottom-sheet';

import { Options } from '../Options';
import { theme } from '../../theme';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { ContainerChat, Container, BottomSheetContainer, Modal, indicator } from './styles';
import { Form } from '../Form';
import { Success } from '../Success';


export type FeedbackType = keyof typeof feedbackTypes;


function Widget() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const bottomSheetRef = useRef<BottomSheet>(null);

  function handlerOpen() {
    bottomSheetRef.current?.expand();
  }

  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  return (
    <Container>
    <ContainerChat 
      activeOpacity={0.5}
      onPress={handlerOpen}
    >
      <ChatTeardropDots 
        size={24}
        weight="bold"
        color= {theme.colors.text_on_brand_color}
      />
    </ContainerChat>

    <BottomSheetContainer 
      ref={bottomSheetRef}
      snapPoints={[1, 280]}
      backgroundStyle={Modal}
      handleIndicatorStyle={indicator}
    >
      {
        feedbackSent?
          <Success onSendAnotherFeedback={handleRestartFeedback}/>
        :
          feedbackType?
            <Form 
              feedbackType={feedbackType} 
              onFeedbackCanceled={handleRestartFeedback} 
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          :
            <Options onFeedbackTypeChanged={setFeedbackType}/>
      }
    </BottomSheetContainer>
    
    </Container>
  );
}


export default gestureHandlerRootHOC(Widget);