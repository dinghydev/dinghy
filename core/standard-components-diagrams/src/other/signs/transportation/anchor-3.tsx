import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ANCHOR_3 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.anchor_3;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 98,
}

export function Anchor3(props: DiagramNodeProps) {
  return (
    <Shape {...ANCHOR_3} {...props} _style={extendStyle(ANCHOR_3, props)} />
  )
}
