import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOCK_UNLOCKED = {
  _style:
    'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.lock_unlocked',
  _width: 37,
  _height: 50,
}

export function LockUnlocked(props: DiagramNodeProps) {
  return <Shape {...LOCK_UNLOCKED} {...props} />
}
