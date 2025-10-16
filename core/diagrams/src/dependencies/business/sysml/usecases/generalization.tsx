import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GENERALIZATION = {
  _style: {
    dependency:
      'edgeStyle=none;html=1;endArrow=block;endFill=0;endSize=12;verticalAlign=bottom;',
  },
}

export function Generalization(props: DiagramNodeProps) {
  return (
    <Dependency
      {...GENERALIZATION}
      {...props}
      _style={extendStyle(GENERALIZATION, props)}
    />
  )
}
