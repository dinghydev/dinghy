import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CHEVRON_ARROW = {
  _style:
    'shape=mxgraph.arrows.chevron_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  _width: 96,
  _height: 60,
}

export function ChevronArrow(props: DiagramNodeProps) {
  return <Shape {...CHEVRON_ARROW} {...props} />
}
