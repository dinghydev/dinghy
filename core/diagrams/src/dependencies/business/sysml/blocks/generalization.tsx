import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GENERALIZATION = {
  _style: {
    dependency: 'edgeStyle=none;html=1;endSize=12;endArrow=block;endFill=0;',
  },
}

export function Generalization(props: NodeProps) {
  return (
    <Dependency
      {...GENERALIZATION}
      {...props}
      _style={extendStyle(GENERALIZATION, props)}
    />
  )
}
