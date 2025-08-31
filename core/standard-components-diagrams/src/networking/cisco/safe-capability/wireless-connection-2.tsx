import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WIRELESS_CONNECTION_2 = {
  _style: {
    entity:
      'fillColor=#999999;verticalLabelPosition=bottom;sketch=0;html=1;strokeColor=#ffffff;verticalAlign=top;align=center;points=[[0.145,0.145,0],[0.5,0,0],[0.855,0.145,0],[1,0.5,0],[0.855,0.855,0],[0.5,1,0],[0.145,0.855,0],[0,0.5,0]];pointerEvents=1;shape=mxgraph.cisco_safe.compositeIcon;bgIcon=ellipse;resIcon=mxgraph.cisco_safe.capability.wireless_connection;',
  },
  _width: 43,
  _height: 43,
}

export function WirelessConnection2(props: DiagramNodeProps) {
  return (
    <Shape
      {...WIRELESS_CONNECTION_2}
      {...props}
      _style={extendStyle(WIRELESS_CONNECTION_2, props)}
    />
  )
}
