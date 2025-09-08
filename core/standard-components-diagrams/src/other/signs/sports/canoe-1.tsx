import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CANOE_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.canoe_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 87,
}

export function Canoe1(props: DiagramNodeProps) {
  return <Shape {...CANOE_1} {...props} _style={extendStyle(CANOE_1, props)} />
}
