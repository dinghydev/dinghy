import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STYLISED_NOTCHED_ARROW = {
  _style:
    'shape=mxgraph.arrows.stylised_notched_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  _width: 96,
  _height: 60,
}

export function StylisedNotchedArrow(props: DiagramNodeProps) {
  return <Shape {...STYLISED_NOTCHED_ARROW} {...props} />
}
