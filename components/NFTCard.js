import { View, Image, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { COLORS, SIZES, SHADOWS, assets } from '../constants'
import { CircleButton, R_Button } from './Button'
import {
  SubInfo,
  EthPrice,
  People,
  NFTTile,
  EndDate,
  ImageCmp,
} from './SubInfo'

const NFTCard = ({ data }) => {
  const navigation = useNavigation()
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: '100%', height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: SIZES.font,
            borderBottomRightRadius: SIZES.font,
          }}
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>

      <SubInfo />

      <View style={{ width: '100%', padding: SIZES.font }}>
        <NFTTile
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
      </View>

      <View
        style={{
          marginTop: '-5%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '3%'
        }}
      >
        <R_Button 
          minWidth={120}
          fontSize={SIZES.font}
          // Navigate to Details Page
          handlePress={() => navigation.navigate("Details", { data })}
        />
        <EthPrice price={data.price} />
      </View>
    </View>
  )
}

export default NFTCard
