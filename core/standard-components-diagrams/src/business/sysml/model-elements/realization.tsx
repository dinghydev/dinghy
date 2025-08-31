import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REALIZATION = {
  _style: {
    dependency:
      'edgeStyle=none;html=1;endSize=12;endArrow=block;endFill=0;dashed=1;',
  },
}

export function Realization(props: DiagramNodeProps) {
  return (
    <Dependency
      {...REALIZATION}
      {...props}
      _style={extendStyle(REALIZATION, props)}
    />
  )
}
