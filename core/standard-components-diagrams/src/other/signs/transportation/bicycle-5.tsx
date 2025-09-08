import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BICYCLE_5 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.bicycle_5;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 54,
}

export function Bicycle5(props: DiagramNodeProps) {
  return (
    <Shape {...BICYCLE_5} {...props} _style={extendStyle(BICYCLE_5, props)} />
  )
}
