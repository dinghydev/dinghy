import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROUTER_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#A153A0;strokeColor=#ffffff;verticalAlign=top;align=center;points=[[0,0.5,0],[0.125,0.25,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[0.875,0.25,0],[1,0.5,0],[0.875,0.75,0],[0.75,1,0],[0.5,1,0],[0.125,0.75,0]];pointerEvents=1;shape=mxgraph.cisco_safe.compositeIcon;bgIcon=mxgraph.cisco_safe.design.blank_device;resIcon=mxgraph.cisco_safe.design.router_2;',
  },
  _original_width: 50,
  _original_height: 45,
}

export function Router2(props: NodeProps) {
  return (
    <Shape {...ROUTER_2} {...props} _style={extendStyle(ROUTER_2, props)} />
  )
}
