import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WINDSURFING = {
  _style:
    'shape=mxgraph.signs.sports.windsurfing;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 98,
}

export function Windsurfing(props: DiagramNodeProps) {
  return <Shape {...WINDSURFING} {...props} />
}
