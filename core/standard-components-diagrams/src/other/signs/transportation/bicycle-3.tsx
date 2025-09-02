import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BICYCLE_3 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.bicycle_3;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 59,
}

export function Bicycle3(props: DiagramNodeProps) {
  return (
    <Shape {...BICYCLE_3} {...props} _style={extendStyle(BICYCLE_3, props)} />
  )
}
