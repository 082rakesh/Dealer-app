import React, {FC} from 'react';
import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';

interface Props {
  isFooter: boolean;
  imageSource: ImageSourcePropType;
  footerTitle?: string;
}

const LogoImage: FC<Props> = ({isFooter, imageSource, footerTitle}) => {
  return (
    <View>
      <Image
        style={styles.logoStyle}
        resizeMode="contain"
        source={imageSource}
      />
      {isFooter ? <Text>{footerTitle}</Text> : <></>}
    </View>
  );
};

const styles = StyleSheet.create({
  logoStyle: {
    height: 150,
    width: 150,
    marginBottom: 10,
  },
});

export default LogoImage;
