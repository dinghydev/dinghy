import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HELICOPTER = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.helicopter;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 100,
  _height: 63,
}

export function Helicopter(props: NodeProps) {
  return (
    <Shape {...HELICOPTER} {...props} _style={extendStyle(HELICOPTER, props)} />
  )
}
