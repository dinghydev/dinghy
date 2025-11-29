import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const JEEP_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.jeep_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 98,
  _height: 53,
}

export function Jeep1(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, JEEP_1)} />
}
