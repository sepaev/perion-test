import videoFile from '../video/video.mp4';

export const getConfigsForPlayable = () => {
  let videoWidth, videoHeight;

  const { clientWidth, clientHeight } = document.documentElement;

  const videoWidthHor = clientWidth * 0.595;
  const videoHeightHor = videoWidthHor * 0.56;
  const videoHeightVer = clientHeight * 0.668;
  const videoWidthVer = videoHeightVer * 1.781;

  if (videoHeightHor <= clientHeight) {
    videoWidth = videoWidthHor;
    videoHeight = videoHeightHor;
  } else {
    videoWidth = videoWidthVer;
    videoHeight = videoHeightVer;
  }
  const config = {
    width: videoWidth,
    height: videoHeight,
    src: videoFile,
    preload: 'metadata',
  };

  const theme = {
    progressColor: 'fff',
  };
  return [config, theme];
};
