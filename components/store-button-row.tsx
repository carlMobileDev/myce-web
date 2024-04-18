import { Link } from 'expo-router';
import React from 'react';
import { View, Image, Linking, Dimensions, PixelRatio } from 'react-native';
import { horizontalScale, verticalScale } from './Metrics';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const StoreButtonRow: React.FC = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
      <Link
        href={
          'https://play.google.com/store/apps/details?id=com.yourapp'
        }
      >
        <Image
          accessibilityLabel='Get it on Google Play'
          source={{
            uri:
              'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png',

          }}
          style={{
            height: heightPercentageToDP(12),
            width: widthPercentageToDP(24),
          }}
          resizeMode='contain'
        />
      </Link>
      <View style={{ width: 10 }}></View>
      <Link
        href={
          'https://apps.apple.com/us/app/my-ce/id1661831705?itsct=apps_box_badge&amp;itscg=30200'
        }
      >
        <Image
          accessibilityLabel='Download on the App Store'
          source={{
            uri:
              'https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us',
          }}
          style={{
            height: heightPercentageToDP(9),
            width: widthPercentageToDP(27),
          }}
          resizeMode='contain'
        />
      </Link>
    </View>
  );
};

export default StoreButtonRow;