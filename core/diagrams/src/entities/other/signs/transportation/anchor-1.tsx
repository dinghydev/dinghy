import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ANCHOR_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.anchor_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 92,
  _original_height: 98,
}

export function Anchor1(props: DiagramNodeProps) {
  return (
    <Shape {...ANCHOR_1} {...props} _style={extendStyle(ANCHOR_1, props)} />
  )
}
