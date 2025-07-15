import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ARROW_LEFT = {
  _style:
    'shape=mxgraph.arrows.arrow_left;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  _width: 97,
  _height: 70,
}

export function ArrowLeft(props: DiagramNodeProps) {
  return <Shape {...ARROW_LEFT} {...props} />
}
