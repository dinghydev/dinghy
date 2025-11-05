import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IMPLEMENTATION = {
  _style: {
    dependency: 'endArrow=block;dashed=1;endFill=0;endSize=12;html=1;',
  },
}

export function Implementation(props: NodeProps) {
  return (
    <Dependency
      {...IMPLEMENTATION}
      {...props}
      _style={extendStyle(IMPLEMENTATION, props)}
    />
  )
}
