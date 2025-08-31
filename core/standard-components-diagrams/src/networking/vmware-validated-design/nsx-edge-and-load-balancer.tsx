import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NSX_EDGE_AND_LOAD_BALANCER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.nsx_edge_and_load_balancer;',
  },
  _width: 50,
  _height: 40.5,
}

export function NsxEdgeAndLoadBalancer(props: DiagramNodeProps) {
  return (
    <Shape
      {...NSX_EDGE_AND_LOAD_BALANCER}
      {...props}
      _style={extendStyle(NSX_EDGE_AND_LOAD_BALANCER, props)}
    />
  )
}
