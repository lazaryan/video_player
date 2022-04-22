import { FC } from 'react';
import TypedEmitter from 'typed-emitter';

import type Emits from 'types/events';

type VideoProps = {
  emitter: TypedEmitter<Emits>;
}

const Video: FC<VideoProps> = () => {
  return (
    <div className="">
      video....
    </div>
  )
};

export default Video;
