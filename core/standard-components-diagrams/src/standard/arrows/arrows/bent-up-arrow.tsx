import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BENT_UP_ARROW = {
  _style:
    'shape=mxgraph.arrows.bent_up_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  _width: 97,
  _height: 83,
}

export function BentUpArrow(props: DiagramNodeProps) {
  return <Shape {...BENT_UP_ARROW} {...props} />
}
