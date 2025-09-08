import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MOTORCYCLE = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.motorcycle;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 66,
}

export function Motorcycle(props: DiagramNodeProps) {
  return (
    <Shape {...MOTORCYCLE} {...props} _style={extendStyle(MOTORCYCLE, props)} />
  )
}
