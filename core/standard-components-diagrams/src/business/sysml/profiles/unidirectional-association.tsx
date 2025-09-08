import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const UNIDIRECTIONAL_ASSOCIATION = {
  _style: {
    dependency:
      'edgeStyle=none;html=1;endArrow=open;endSize=12;verticalAlign=bottom;',
  },
}

export function UnidirectionalAssociation(props: DiagramNodeProps) {
  return (
    <Dependency
      {...UNIDIRECTIONAL_ASSOCIATION}
      {...props}
      _style={extendStyle(UNIDIRECTIONAL_ASSOCIATION, props)}
    />
  )
}
