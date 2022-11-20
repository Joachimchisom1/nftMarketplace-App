import { View, Text, Image, TextInput } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { FONTS, COLORS, SIZES, assets, SHADOWS } from '../constants'

const HomeHeader = ({ onSearch }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Image
          source={assets.rockin}
          resizeMode="contain"
          style={{
            width: 95,
            height: 35,
          }}
        />
        <View style={{ width: 45, height: 45 }}>
          <Image
            source={assets.person05}
            resizeMode="contain"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
            }}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              width: 15,
              height: 15,
              position: 'absolute',
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>
      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}
        >
          {' '}
          Hello Joachim👋
        </Text>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          {' '}
          Let's find a masterpiece
        </Text>
      </View>
      <View
        style={{
          marginTop: SIZES.font,
        }}
      >
        <View
          style={{
            width: '100%',
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small,
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder="Search NTFs"
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  )
}

export default HomeHeader
