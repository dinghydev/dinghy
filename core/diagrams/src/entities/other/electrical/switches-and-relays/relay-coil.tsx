import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RELAY_COIL = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.relay_coil;',
  },
  _width: 70,
  _height: 35,
}

export function RelayCoil(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, RELAY_COIL)} />
}
