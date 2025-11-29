import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GENERALIZATION = {
  _style: {
    dependency: 'endArrow=block;endSize=16;endFill=0;html=1;',
  },
}

export function Generalization(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, GENERALIZATION)} />
}
