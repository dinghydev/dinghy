import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRIAD_ARROW = {
  _style:
    'shape=mxgraph.arrows.triad_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  _width: 97,
  _height: 68,
}

export function TriadArrow(props: DiagramNodeProps) {
  return <Shape {...TRIAD_ARROW} {...props} />
}
