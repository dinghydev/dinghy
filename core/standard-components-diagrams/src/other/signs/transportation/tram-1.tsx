import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRAM_1 = {
  _style:
    'shape=mxgraph.signs.transportation.tram_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 51,
}

export function Tram1(props: DiagramNodeProps) {
  return <Shape {...TRAM_1} {...props} />
}
