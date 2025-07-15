import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FERRY = {
  _style:
    'shape=mxgraph.signs.transportation.ferry;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 69,
}

export function Ferry(props: DiagramNodeProps) {
  return <Shape {...FERRY} {...props} />
}
