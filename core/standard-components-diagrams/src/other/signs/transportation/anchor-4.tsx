import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ANCHOR_4 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.anchor_4;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 60,
  _height: 60,
}

export function Anchor4(props: DiagramNodeProps) {
  return (
    <Shape {...ANCHOR_4} {...props} _style={extendStyle(ANCHOR_4, props)} />
  )
}
