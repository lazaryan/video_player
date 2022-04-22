import {
  FC,
  useState,
  useEffect,
} from 'react';
import EventEmitter from 'events';
import TypedEmitter from 'typed-emitter';

import Video from 'components/Video';
import ProgressBar from 'components/ProgressBar';
import ActionLine from 'components/ActionLine';
import type Emits from 'types/events';

import cssClasses from './styles.module.less';

const VideoPlayer: FC = () => {
  const [emitter] = useState(new EventEmitter() as TypedEmitter<Emits>);

  useEffect(() => {
    return () => {
      emitter.removeAllListeners();
    };
  }, []);

  return (
    <div className={cssClasses['player-wrapper']}>
      <Video emitter={emitter} />
      <ProgressBar emitter={emitter} />
      <ActionLine emitter={emitter} />
    </div>
  )
}

export default VideoPlayer;
