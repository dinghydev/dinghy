import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHAIR_LIFT = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.chair_lift;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 84,
  _original_height: 98,
}

export function ChairLift(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CHAIR_LIFT)} />
}
