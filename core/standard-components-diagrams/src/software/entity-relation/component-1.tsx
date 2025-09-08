import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMPONENT_1 = {
  _style: {
    dependency:
      'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERone;endFill=1;',
  },
}

export function Component1(props: DiagramNodeProps) {
  return (
    <Dependency
      {...COMPONENT_1}
      {...props}
      _style={extendStyle(COMPONENT_1, props)}
    />
  )
}
