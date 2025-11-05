import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HOTEL = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.hotel;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 60,
}

export function Hotel(props: NodeProps) {
  return <Shape {...HOTEL} {...props} _style={extendStyle(HOTEL, props)} />
}
