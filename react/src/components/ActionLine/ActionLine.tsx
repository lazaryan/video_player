import { FC } from 'react';
import TypedEmitter from 'typed-emitter';

import type Emits from 'types/events';

type ActionLineProps = {
  emitter: TypedEmitter<Emits>;
}

const ActionLine: FC<ActionLineProps> = () => {
  return (
    <div className="">
      action line...
    </div>
  );
}

export default ActionLine;
