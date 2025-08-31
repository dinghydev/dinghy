import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VPN_CONCENTRATOR = {
  _style:
    'shape=mxgraph.cisco.misc.vpn_concentrator;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 64,
  _height: 59,
}

export function VpnConcentrator(props: DiagramNodeProps) {
  return (
    <Shape
      {...VPN_CONCENTRATOR}
      {...props}
      _style={extendStyle(VPN_CONCENTRATOR, props)}
    />
  )
}
