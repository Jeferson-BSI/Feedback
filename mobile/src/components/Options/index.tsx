import React from 'react';

import { Option } from '../Option';
import { Copyright } from '../Copyright';

import { feedbackTypes } from '../../utils/feedbackTypes';
import { Container, Content, Title } from './styles';
import { FeedbackType } from '../Widget';

interface OptionProps {
  onFeedbackTypeChanged: (feedback: FeedbackType ) => void;
}

export function Options({ onFeedbackTypeChanged }:OptionProps ) {
  return (
    <Container>
      <Title> Deixe seu feedback </Title>
      
      <Content>
        {
          Object.entries(feedbackTypes)
          .map(([key, value]) => (
            <Option 
              key={key} 
              title={value.title} 
              image={value.image} 
              onPress={() => onFeedbackTypeChanged(key as FeedbackType)
            }/>
          ))
        }
      </Content>

      <Copyright />
    </Container>
  )
}


      // <Option title='' image={}/>