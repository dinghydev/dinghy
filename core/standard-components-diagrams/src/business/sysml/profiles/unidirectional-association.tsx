import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const UNIDIRECTIONAL_ASSOCIATION = {
  _style:
    'edgeStyle=none;html=1;endArrow=open;endSize=12;verticalAlign=bottom;',
  _width: 160,
  _height: 0,
}

export function UnidirectionalAssociation(props: DiagramNodeProps) {
  return <Dependency {...UNIDIRECTIONAL_ASSOCIATION} {...props} />
}
