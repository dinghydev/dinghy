import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STEREOTYPE_EDGE = {
  _style:
    'endArrow=none;html=1;edgeStyle=none;labelBackgroundColor=none;align=left;fontStyle=1;fontSize=10;',
  _width: 2,
  _height: 180,
}

export function StereotypeEdge(props: DiagramNodeProps) {
  return <Shape {...STEREOTYPE_EDGE} {...props} />
}
