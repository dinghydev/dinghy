import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MANY_TO_MANY = {
  _style:
    'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERmany;startArrow=ERmany;',
  _width: 100,
  _height: 100,
}

export function ManyToMany(props: DiagramNodeProps) {
  return <Dependency {...MANY_TO_MANY} {...props} />
}
