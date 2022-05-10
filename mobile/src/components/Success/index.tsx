import React from "react";

import successImage from '../../assets/success.png';
import { Copyright } from "../Copyright";

import { Container, Image, Title, ButtonTitle, Button } from './styles';

interface SuccessProps {
  onSendAnotherFeedback: () => void;
}

export function Success({ onSendAnotherFeedback }: SuccessProps) {
  return(
    <Container>
      <Image 
        source={successImage}
      />
      <Title>
        Agradecemos o feedback 
      </Title>

      <Button
        onPress={onSendAnotherFeedback}
      >
        <ButtonTitle>
            Quero enviar outro 
        </ButtonTitle>
      </Button>

      <Copyright />
    </Container>

  );
}