import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

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
