import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TOW_AWAY = {
  _style:
    'shape=mxgraph.signs.transportation.tow_away;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 31,
}

export function TowAway(props: DiagramNodeProps) {
  return <Shape {...TOW_AWAY} {...props} />
}
