import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SHIP_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.ship_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 52,
}

export function Ship1(props: DiagramNodeProps) {
  return <Shape {...SHIP_1} {...props} _style={extendStyle(SHIP_1, props)} />
}
