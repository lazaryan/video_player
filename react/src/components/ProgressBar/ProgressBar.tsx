import { FC } from 'react';
import TypedEmitter from 'typed-emitter';

import type Emits from 'types/events';

type ProgressBarProps = {
  emitter: TypedEmitter<Emits>;
}

const ProgressBar: FC<ProgressBarProps> = () => {
  return (
    <div className="">
      progress...
    </div>
  );
}

export default ProgressBar;
