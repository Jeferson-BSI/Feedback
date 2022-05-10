import React from 'react';
import { Trash, Camera } from 'phosphor-react-native';
import { theme } from '../../theme';

import { Container, styles, Image } from './styles';

interface ScreenShotProps {
  screenshot: string | null;
  onTakeShot: () => void;
  onRemove: () => void;
}

export function ScreenShotButton({screenshot, onTakeShot, onRemove}:ScreenShotProps) {

  return (
    <Container
      onPress={screenshot ? onRemove: onTakeShot}
    >
      {
        screenshot?
        <>
        <Image 
          source={{uri: screenshot}}
        />
          <Trash 
            size={22}
            color={theme.colors.text_secondary}
            weight="fill"
            style={styles.RemoveIcon}
          />
        </>
        :
          <Camera 
            size={22}
            color={theme.colors.text_secondary}
            weight="bold"
          />
      }
    </Container>
  )
}