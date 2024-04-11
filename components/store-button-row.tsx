import {View} from '@/components/Themed';
import {Link} from 'expo-router';

interface StoreButtonRowProps {
  color: string;
  includeLinkedIn: boolean;
}

const StoreButtonRow: React.FC<StoreButtonRowProps> = (props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: props.color,
        alignItems: 'center',
      }}
    >
      <Link
        href={
          'https://play.google.com/store/apps/details?id=com.carlMobileDev.myceu_flutter'
        }
      ></Link>
      <a href="https://play.google.com/store/apps/details?id=com.carlMobileDev.myceu_flutter&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
        <img
          alt="Get it on Google Play"
          width={300}
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
        />
      </a>
      <View style={{width: 30, backgroundColor: props.color}}></View>

      <a href="https://apps.apple.com/us/app/my-ce/id1661831705?itsct=apps_box_badge&amp;itscg=30200">
        <img
          src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1675814400"
          alt="Download on the App Store"
          height={83}
          width={250}
        />
      </a>
    </View>
  );
};

export default StoreButtonRow;
