import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TAXI = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.taxi;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 94,
}

export function Taxi(props: DiagramNodeProps) {
  return <Shape {...TAXI} {...props} _style={extendStyle(TAXI, props)} />
}
