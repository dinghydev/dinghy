import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AMBULANCE = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.ambulance;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 68,
}

export function Ambulance(props: NodeProps) {
  return (
    <Shape {...AMBULANCE} {...props} _style={extendStyle(AMBULANCE, props)} />
  )
}
