import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REALIZATION = {
  _style: {
    dependency:
      'edgeStyle=none;html=1;endSize=12;endArrow=block;endFill=0;dashed=1;',
  },
}

export function Realization(props: NodeProps) {
  return (
    <Dependency
      {...REALIZATION}
      {...props}
      _style={extendStyle(REALIZATION, props)}
    />
  )
}
