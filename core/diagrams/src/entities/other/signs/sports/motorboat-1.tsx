import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MOTORBOAT_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.motorboat_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 49,
}

export function Motorboat1(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MOTORBOAT_1)} />
}
