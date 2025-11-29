import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TERMINATE = {
  _style: {
    dependency:
      'endArrow=open;startArrow=cross;endFill=0;startFill=0;endSize=8;startSize=10;html=1;',
  },
}

export function Terminate(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, TERMINATE)} />
}
