import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TANK = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.tank;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 100,
  _height: 50,
}

export function Tank(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TANK)} />
}
