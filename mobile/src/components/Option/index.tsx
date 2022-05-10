import React from 'react';
import { ImageProps, TouchableOpacityProps } from 'react-native';
import { Container, Image, Title } from './styles';


interface OptionProps extends TouchableOpacityProps {
  title: string;
  image: ImageProps;
}

export function Option({ title, image, onPress }: OptionProps) {
  return (
    <Container

    onPress={onPress}
    >
      <Image
        source={image}
      />
      
      <Title>
        {title}
      </Title>
    </Container>
  )
}