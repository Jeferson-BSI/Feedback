import { ArrowLeft } from 'phosphor-react-native';
import React, { useState } from 'react';
import { captureScreen } from 'react-native-view-shot';
import * as FileSystem from 'expo-file-system';

import { theme } from '../../theme';
import { FeedbackType } from '../Widget';
import { feedbackTypes} from '../../utils/feedbackTypes';
import { ScreenShotButton } from '../ScreenshotButton';
import { Button } from '../Button';
import { api } from '../../services/api';

import { 
  Container,  
  Title, 
  BackButton,
  Header, 
  TitleContainer, 
  Image,
  TextInput,
  Footer
 } from './styles';



interface FormProps {
  feedbackType: FeedbackType;
  onFeedbackCanceled: () => void;
  onFeedbackSent: () => void;
}

export function Form({ feedbackType, onFeedbackCanceled, onFeedbackSent }: FormProps) {

  const [screenshot, setScreenShot] = useState<string | null>(null);
  const [comment, setComment] = useState('');
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);


  const feedbackTypeInfo = feedbackTypes[feedbackType];

  function handleScreenshot(){
    captureScreen({
      format: 'jpg',
      quality: 0.8
    })
    .then(uri => setScreenShot(uri))
    .catch(err => console.log(err));
  }

  function removeScreenshot(){
    setScreenShot(null);
  }

  async function handleSubmitFeedback(){
    if(!comment || isSendingFeedback){
      return;
    }
    setIsSendingFeedback(true);

    const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(screenshot, { encoding: 'base64'});

    try { 
      await api.post('/feedback', {
        type: feedbackTypeInfo.title,
        comment,
        screenshot:`data:image/png;base64, ${screenshotBase64}` 
      });

      onFeedbackSent();
    } catch(err){
      console.log(err);
      setIsSendingFeedback(false)
    }
  }

  return (
    <Container>
      <Header>
        <BackButton
        onPress={onFeedbackCanceled}
        >
          <ArrowLeft 
            size= {24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </BackButton>
        <TitleContainer>
          <Image 
            source={feedbackTypeInfo.image}
          />
          <Title>
            {feedbackTypeInfo.title}
          </Title>
        </TitleContainer>
      </Header>

      <TextInput 
        autoCorrect={false}
        multiline
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        placeholderTextColor={theme.colors.text_secondary}
        value={comment}
        onChangeText={(value) => setComment(value)}
      />
      <Footer>
        <ScreenShotButton 
          screenshot={screenshot}
          onTakeShot={handleScreenshot}
          onRemove={removeScreenshot}
        />

        <Button 
          isLoading={isSendingFeedback}
          onPress={handleSubmitFeedback}
        />

      </Footer>
    </Container>
  )
}