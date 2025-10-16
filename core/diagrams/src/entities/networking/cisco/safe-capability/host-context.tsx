import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HOST_CONTEXT = {
  _style: {
    entity:
      'fillColor=#999999;verticalLabelPosition=bottom;sketch=0;html=1;strokeColor=#ffffff;verticalAlign=top;align=center;points=[[0.145,0.145,0],[0.5,0,0],[0.855,0.145,0],[1,0.5,0],[0.855,0.855,0],[0.5,1,0],[0.145,0.855,0],[0,0.5,0]];pointerEvents=1;shape=mxgraph.cisco_safe.compositeIcon;bgIcon=ellipse;resIcon=mxgraph.cisco_safe.capability.host_context;',
  },
  _original_width: 43,
  _original_height: 43,
}

export function HostContext(props: DiagramNodeProps) {
  return (
    <Shape
      {...HOST_CONTEXT}
      {...props}
      _style={extendStyle(HOST_CONTEXT, props)}
    />
  )
}
