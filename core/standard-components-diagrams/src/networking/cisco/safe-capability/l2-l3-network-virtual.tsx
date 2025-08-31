import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const L2_L3_NETWORK_VIRTUAL = {
  _style:
    'fillColor=#28A8E0;verticalLabelPosition=bottom;sketch=0;html=1;strokeColor=#ffffff;verticalAlign=top;align=center;points=[[0.145,0.145,0],[0.5,0,0],[0.855,0.145,0],[1,0.5,0],[0.855,0.855,0],[0.5,1,0],[0.145,0.855,0],[0,0.5,0]];pointerEvents=1;shape=mxgraph.cisco_safe.compositeIcon;bgIcon=ellipse;resIcon=mxgraph.cisco_safe.capability.l2_l3_network_virtual;',
  _width: 43,
  _height: 43,
}

export function L2L3NetworkVirtual(props: DiagramNodeProps) {
  return (
    <Shape
      {...L2_L3_NETWORK_VIRTUAL}
      {...props}
      _style={extendStyle(L2_L3_NETWORK_VIRTUAL, props)}
    />
  )
}
