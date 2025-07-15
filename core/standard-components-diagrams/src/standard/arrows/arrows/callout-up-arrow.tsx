import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CALLOUT_UP_ARROW = {
  _style:
    'shape=mxgraph.arrows.callout_up_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  _width: 60,
  _height: 98,
}

export function CalloutUpArrow(props: DiagramNodeProps) {
  return <Shape {...CALLOUT_UP_ARROW} {...props} />
}
