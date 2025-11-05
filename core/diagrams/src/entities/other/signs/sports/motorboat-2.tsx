import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MOTORBOAT_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.motorboat_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 36,
}

export function Motorboat2(props: NodeProps) {
  return (
    <Shape
      {...MOTORBOAT_2}
      {...props}
      _style={extendStyle(MOTORBOAT_2, props)}
    />
  )
}
