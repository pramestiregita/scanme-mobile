import React from 'react';
import QRCode from 'react-native-qrcode-svg';

export default function QrCode({value}) {
  return (
    <QRCode
      value={value}
      size={300}
      quietZone={20}
      logo={require('../../assets/logo.jpeg')}
      logoSize={80}
      logoBackgroundColor="transparent"
    />
  );
}
