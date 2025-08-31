import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TUNNEL_DIODE_2 = {
  _style: {
    entity:
      'pointerEvents=1;fillColor=strokeColor;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.diodes.tunnel_diode_2;',
  },
  _width: 100,
  _height: 80,
}

export function TunnelDiode2(props: DiagramNodeProps) {
  return (
    <Shape
      {...TUNNEL_DIODE_2}
      {...props}
      _style={extendStyle(TUNNEL_DIODE_2, props)}
    />
  )
}
