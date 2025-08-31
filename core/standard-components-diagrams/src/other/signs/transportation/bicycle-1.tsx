import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BICYCLE_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.bicycle_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 62,
}

export function Bicycle1(props: DiagramNodeProps) {
  return (
    <Shape {...BICYCLE_1} {...props} _style={extendStyle(BICYCLE_1, props)} />
  )
}
