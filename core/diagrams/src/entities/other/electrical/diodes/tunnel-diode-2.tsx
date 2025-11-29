import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TUNNEL_DIODE_2 = {
  _style: {
    entity:
      'pointerEvents=1;fillColor=strokeColor;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.diodes.tunnel_diode_2;',
  },
  _width: 100,
  _height: 80,
}

export function TunnelDiode2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TUNNEL_DIODE_2)} />
}
