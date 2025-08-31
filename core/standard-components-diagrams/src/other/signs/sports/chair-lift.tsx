import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHAIR_LIFT = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.chair_lift;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 84,
  _height: 98,
}

export function ChairLift(props: DiagramNodeProps) {
  return (
    <Shape {...CHAIR_LIFT} {...props} _style={extendStyle(CHAIR_LIFT, props)} />
  )
}
