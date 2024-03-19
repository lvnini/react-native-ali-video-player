## Installation

```sh
npm install react-native-ali-video-player
```

## Usage
```ts
import VideoPlayer from 'react-native-ali-video-player';

const refPlayer = React.useRef<VideoPlayerHandler>(null);
const uriSource = { uri: "https://player.alicdn.com/video/aliyunmedia.mp4" }

const stsSource = {
  sts: {
    vid: 'YOUR_VID'
    region: 'YOUR_REGION',
    accessKeyId: 'YOUR_ACCESS_KEY_ID',
    accessKeySecret: 'YOUR_ACCESS_KEY_SECRET',
    securityToken: 'YOUR_SECURITY_TOKEN',
  },
}

const authSource = {
  auth: {
    vid: 'YOUR_VID'
    region: 'YOUR_REGION',
    playAuth: 'YOUR_PLAY_AUTH',
  },
}

<VideoPlayer
  ref={refPlayer}
  isHiddenBack
  isLandscape
  enableBackground={true}
  source={uriSource /* or stsSource or authSource */}
  setAutoPlay={true}
  showTiming={true}
  onCompletion={() => {
    console.log('onCompletion');
  }}
  onError={(error: any) => {
    console.log('error', error);
  }}
  onProgress={(error: any) => {
    console.log('onProgress', error);
  }}
  onAliBitrateReady={e => {
    console.log('onAliBitrateReady', e.nativeEvent.bitrates);
  }}
  onAliLoadingEnd={e => {
    console.log('onAliLoadingEnd', e);
  }}
  onBufferProgress={(progress: any) => {
    console.log('onBufferProgress', progress);
  }}
  onPrepare={(duration: any) => {
    console.log('onPrepare', duration);
  }}
  style={[styles.box, {width: layout.width, height: 200}]}
/>
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
