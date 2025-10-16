import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMPONENT_0_TO_1 = {
  _style: {
    dependency:
      'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERzeroToOne;endFill=1;',
  },
}

export function Component0To1(props: DiagramNodeProps) {
  return (
    <Dependency
      {...COMPONENT_0_TO_1}
      {...props}
      _style={extendStyle(COMPONENT_0_TO_1, props)}
    />
  )
}
