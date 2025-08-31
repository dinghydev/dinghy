import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MANY = {
  _style: {
    dependency:
      'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERmany;',
  },
}

export function Many(props: DiagramNodeProps) {
  return <Dependency {...MANY} {...props} _style={extendStyle(MANY, props)} />
}
