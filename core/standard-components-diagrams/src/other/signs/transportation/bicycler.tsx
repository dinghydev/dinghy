import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BICYCLER = {
  _style:
    'shape=mxgraph.signs.transportation.bicycler;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 95,
  _height: 98,
}

export function Bicycler(props: DiagramNodeProps) {
  return <Shape {...BICYCLER} {...props} />
}
