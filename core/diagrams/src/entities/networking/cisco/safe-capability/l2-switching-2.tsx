import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const L2_SWITCHING_2 = {
  _style: {
    entity:
      'fillColor=#999999;verticalLabelPosition=bottom;sketch=0;html=1;strokeColor=#ffffff;verticalAlign=top;align=center;points=[[0.145,0.145,0],[0.5,0,0],[0.855,0.145,0],[1,0.5,0],[0.855,0.855,0],[0.5,1,0],[0.145,0.855,0],[0,0.5,0]];pointerEvents=1;shape=mxgraph.cisco_safe.compositeIcon;bgIcon=ellipse;resIcon=mxgraph.cisco_safe.capability.l2_switching;',
  },
  _original_width: 43,
  _original_height: 43,
}

export function L2Switching2(props: NodeProps) {
  return (
    <Shape
      {...L2_SWITCHING_2}
      {...props}
      _style={extendStyle(L2_SWITCHING_2, props)}
    />
  )
}
