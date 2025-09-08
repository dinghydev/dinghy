import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MANY_TO_MANY = {
  _style: {
    dependency:
      'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERmany;startArrow=ERmany;',
  },
}

export function ManyToMany(props: DiagramNodeProps) {
  return (
    <Dependency
      {...MANY_TO_MANY}
      {...props}
      _style={extendStyle(MANY_TO_MANY, props)}
    />
  )
}
