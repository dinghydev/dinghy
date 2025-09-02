import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ANCHOR_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.anchor_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 94,
  _original_height: 98,
}

export function Anchor2(props: DiagramNodeProps) {
  return (
    <Shape {...ANCHOR_2} {...props} _style={extendStyle(ANCHOR_2, props)} />
  )
}
