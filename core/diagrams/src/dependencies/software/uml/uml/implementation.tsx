import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IMPLEMENTATION = {
  _style: {
    dependency: 'endArrow=block;dashed=1;endFill=0;endSize=12;html=1;',
  },
}

export function Implementation(props: DiagramNodeProps) {
  return (
    <Dependency
      {...IMPLEMENTATION}
      {...props}
      _style={extendStyle(IMPLEMENTATION, props)}
    />
  )
}
