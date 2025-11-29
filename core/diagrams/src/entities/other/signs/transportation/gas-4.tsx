import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GAS_4 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.gas_4;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 75,
  _height: 98,
}

export function Gas4(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, GAS_4)} />
}
