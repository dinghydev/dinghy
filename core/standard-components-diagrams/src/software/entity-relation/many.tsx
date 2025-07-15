import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MANY = {
  _style:
    'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERmany;',
  _width: 100,
  _height: 100,
}

export function Many(props: DiagramNodeProps) {
  return <Dependency {...MANY} {...props} />
}
