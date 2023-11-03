import React from 'react';
import { View, Pressable, TextInput } from 'react-native';
import { scale } from 'react-native-size-matters';
import { appColors } from '../utils/appColors';
import Feather from 'react-native-vector-icons/Feather';

export default function SearchBox({ autoFocus, onFoucs, hideCamra, onRightIconPress, rightIcon }) {
  return (
    <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', }}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: scale(10),
          borderRadius: scale(20),
          alignItems: 'center',
          backgroundColor: appColors.lightGray,
          //width: '100%',
          flexDirection: 'row',
          height: scale(40),
        }}>
        <Feather name="search" size={scale(15)} color={appColors.black} />
        <TextInput
          autoFocus={autoFocus}
          onFocus={onFoucs && onFoucs}
          style={{ flex: 1, paddingLeft: scale(10) }}
        />
      </View>
      {!hideCamra && rightIcon && (
        <Pressable
          onPress={onRightIconPress && onRightIconPress}
          style={{
            borderRadius: scale(20),
            width: scale(40),
            height: scale(40),
            backgroundColor: appColors.primary,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: scale(20)
          }}>
          {rightIcon && <Feather name={rightIcon ? rightIcon : "camera"} size={scale(18)} color={appColors.white} />}
        </Pressable>
      )}
    </View>
  );
}
