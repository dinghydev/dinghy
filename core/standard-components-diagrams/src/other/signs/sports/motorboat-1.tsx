import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MOTORBOAT_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.motorboat_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 49,
}

export function Motorboat1(props: DiagramNodeProps) {
  return (
    <Shape
      {...MOTORBOAT_1}
      {...props}
      _style={extendStyle(MOTORBOAT_1, props)}
    />
  )
}
