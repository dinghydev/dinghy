import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TRACTOR_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.tractor_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 76,
}

export function Tractor1(props: NodeProps) {
  return (
    <Shape {...TRACTOR_1} {...props} _style={extendStyle(TRACTOR_1, props)} />
  )
}
