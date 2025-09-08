import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BICYCLE_4 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.bicycle_4;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 58,
}

export function Bicycle4(props: DiagramNodeProps) {
  return (
    <Shape {...BICYCLE_4} {...props} _style={extendStyle(BICYCLE_4, props)} />
  )
}
