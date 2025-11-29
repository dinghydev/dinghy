import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOCK_UNLOCKED = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.lock_unlocked',
  },
  _width: 37,
  _height: 50,
}

export function LockUnlocked(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LOCK_UNLOCKED)} />
}
