import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';

type CustomButtonWithIconProps = {
  text: string;
  onPress: () => void;
  iconName: IconDefinition;
};

const CustomButtonWithIcon = ({
  text,
  onPress,
  iconName,
}: CustomButtonWithIconProps) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={() => onPress()}>
      <FontAwesomeIcon icon={iconName} />
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButtonWithIcon;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    borderWidth: 1,
    padding: 8,
    borderRadius: 16,
  },
});
