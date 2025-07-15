import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const JET_SKI = {
  _style:
    'shape=mxgraph.signs.sports.jet_ski;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 86,
}

export function JetSki(props: DiagramNodeProps) {
  return <Shape {...JET_SKI} {...props} />
}
