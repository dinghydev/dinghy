import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CANOE_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.canoe_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 103,
  _original_height: 49,
}

export function Canoe2(props: DiagramNodeProps) {
  return <Shape {...CANOE_2} {...props} _style={extendStyle(CANOE_2, props)} />
}
