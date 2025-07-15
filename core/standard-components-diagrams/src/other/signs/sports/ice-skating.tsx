import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ICE_SKATING = {
  _style:
    'shape=mxgraph.signs.sports.ice_skating;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 95,
  _height: 100,
}

export function IceSkating(props: DiagramNodeProps) {
  return <Shape {...ICE_SKATING} {...props} />
}
