import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REALIZATION = {
  _style: {
    dependency:
      'endArrow=block;startArrow=none;endFill=0;startFill=0;endSize=8;html=1;verticalAlign=bottom;dashed=1;labelBackgroundColor=none;',
  },
}

export function Realization(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, REALIZATION)} />
}
