import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AIRPLANE_6 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.airplane_6;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 97,
  _height: 101,
}

export function Airplane6(props: NodeProps) {
  return (
    <Shape {...AIRPLANE_6} {...props} _style={extendStyle(AIRPLANE_6, props)} />
  )
}
