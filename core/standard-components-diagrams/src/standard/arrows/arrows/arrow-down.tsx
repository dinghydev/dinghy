import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ARROW_DOWN = {
  _style:
    'shape=mxgraph.arrows.arrow_down;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  _width: 70,
  _height: 97,
}

export function ArrowDown(props: DiagramNodeProps) {
  return <Shape {...ARROW_DOWN} {...props} />
}
