import { Dimensions } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 480;
const guidelineBaseHeight = 812;

const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) => size + (horizontalScale(size) - size) * factor;
const isMobile = width <= guidelineBaseWidth;
const textSize = (percent: number, maxSize: number) => Math.min(maxSize, widthPercentageToDP(percent))

export { horizontalScale, verticalScale, moderateScale, isMobile, textSize };