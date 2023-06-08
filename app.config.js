const IS_DEV = process.env.APP_VARIANT === 'development';

export default {
  // You can also switch out the app icon and other properties to further
  // differentiate the app on your device.
  name: IS_DEV ? 'Spacecraft (Dev)' : 'Spacecraft',
  slug: 'spacecraft',
  ios: {
    bundleIdentifier: IS_DEV ? 'com.coraly.spacecraft.dev' : 'com.coraly.spacecraft',
  },
  android: {
    package: IS_DEV ? 'com.coraly.spacecraftdev' : 'com.coraly.spacecraft',
  },
  extra: {
    eas: {
        projectId: "5a33cc1a-7934-4698-ae28-879a11454515",
    }
  }
};