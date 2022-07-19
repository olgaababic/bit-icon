import React from 'react';

import {View, StyleSheet, ViewStyle} from 'react-native';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

// import {IconProp} from '@fortawesome/fontawesome-svg-core';
// import {typography} from '../../theme';

export type IconProps = {
  /**
   * a text to be rendered in the component.
   */
  color?: string;
  icon: IconNameType;
  style?: any;
  variation?: Variation;
  isRotated?: boolean;
  containerStyle?: ViewStyle;
};

const styles = StyleSheet.create({
  text: {},
});

const localStyle = StyleSheet.create({
  rotateIcon: {transform: [{rotateY: '180deg'}]},
});

export type IconNameType = IconProp;

export type Variation =
  | 'headline1'
  | 'headline2'
  | 'headline3'
  | 'headline4'
  | 'headline5'
  | 'body1'
  | 'body2'
  | 'buttonLarge'
  | 'buttonSmall'
  | 'caption';

const Icon = ({
  color = '#000000',
  icon,
  style = {},
  variation,
  isRotated = false,
  containerStyle = {},
}: IconProps): JSX.Element => {
  // const fontSize = typography[variation].fontSize;
  // const height = typography[variation].lineHeight;
  // const width = typography[variation].lineHeight;
  const fontSize = 20;
  const height = 24;
  const width = 24;

  return (
    <View
      style={[
        {height, width, justifyContent: 'center', alignItems: 'center'},
        containerStyle,
      ]}>
      {/* <FontAwesomeIcon
        icon={icon}
        size={fontSize}
        color={color}
        style={[style, isRotated ? localStyle.rotateIcon : {}]}
      /> */}
    </View>
  );
};

export default Icon;

// export * from './utils';
