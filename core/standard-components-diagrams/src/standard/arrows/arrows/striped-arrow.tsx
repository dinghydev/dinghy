import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STRIPED_ARROW = {
  _style:
    'shape=mxgraph.arrows.striped_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  _width: 97,
  _height: 70,
}

export function StripedArrow(props: DiagramNodeProps) {
  return <Shape {...STRIPED_ARROW} {...props} />
}
