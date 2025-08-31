import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GENERALIZATION = {
  _style: {
    dependency: 'edgeStyle=none;html=1;endSize=12;endArrow=block;endFill=0;',
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
