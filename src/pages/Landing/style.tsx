import { StyleSheet } from 'react-native';
import { ColorStype } from '../../../styles/color';
import { TypographyStyle } from '../../../styles/typography';

export const LandingStyle = StyleSheet.create({
  Landing: {
    flex: 1,
  },
  BGContainer: {
    flex: 1,
  },
  BGImage: {
    opacity: 0.5,
  },
  Content: {
    paddingTop: 84,
    paddingBottom: 64,
    paddingLeft: 16,
    paddingRight: 16,
    display: 'flex',
    justifyContent: 'space-between',
    flex: 1,
  },
  Title: {
    ...TypographyStyle.Display2,
    color: ColorStype.Light.Shadow,
  },
  Role: {
    ...TypographyStyle.Headline3,
    color: ColorStype.Light.Shadow,
    paddingTop: 12,
  },
  PrimaryButtonContainer: {
    paddingTop: 16,
  },
  PrimaryButton: {
    ...TypographyStyle.LabelLarge,
    color: ColorStype.Light.OnPrimary,
    borderRadius: 100,
    alignSelf: 'flex-end',
  },
  TonalButton: {
    ...TypographyStyle.LabelLarge,
    color: ColorStype.Light.OnSecondary,
    borderRadius: 100,
    alignSelf: 'flex-end',
  },
});
