import React from 'react';
import { SafeAreaView, ImageBackground, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { LandingContent } from './contents';
import { LandingStyle } from './style';

export const Landing = () => {
  return (
    <SafeAreaView style={LandingStyle.Landing}>
      <ImageBackground
        style={LandingStyle.BGContainer}
        source={LandingContent.backgroundImgSrc}
        imageStyle={LandingStyle.BGImage}>
        <View style={LandingStyle.Content}>
          <View>
            <Text style={LandingStyle.Title}>{LandingContent.name}</Text>
            <Text style={LandingStyle.Role}>{LandingContent.role}</Text>
            <View style={LandingStyle.PrimaryButtonContainer}>
              <Button
                style={LandingStyle.PrimaryButton}
                icon={'chevron-right'}
                mode="contained">
                {LandingContent.primaryButton.name}
              </Button>
            </View>
          </View>
          <View>
            <View style={LandingStyle.PrimaryButtonContainer}>
              {LandingContent.tonalButton.map((button, index) => {
                return (
                  <Button
                    compact
                    style={{
                      ...LandingStyle.TonalButton,
                      ...(button.style || {}),
                    }}
                    mode="contained-tonal"
                    key={`tonal-button--${index}`}>
                    {button.name}
                  </Button>
                );
              })}
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
