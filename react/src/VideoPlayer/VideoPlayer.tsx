import { FC } from 'react';

import cssClasses from './styles.module.less';

const VideoPlayer: FC = () => {
  return (
    <div className={cssClasses['player-wrapper']}>
      my video player
    </div>
  )
}

export default VideoPlayer;
