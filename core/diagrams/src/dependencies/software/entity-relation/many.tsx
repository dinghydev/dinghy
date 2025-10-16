import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MANY = {
  _style: {
    dependency:
      'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERmany;',
  },
}

export function Many(props: DiagramNodeProps) {
  return <Dependency {...MANY} {...props} _style={extendStyle(MANY, props)} />
}
