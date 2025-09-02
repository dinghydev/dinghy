import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DISTRIBUTED_DENIAL_OF_SERVICE_PROTECTION = {
  _style: {
    entity:
      'fillColor=#28A8E0;verticalLabelPosition=bottom;sketch=0;html=1;strokeColor=#ffffff;verticalAlign=top;align=center;points=[[0.145,0.145,0],[0.5,0,0],[0.855,0.145,0],[1,0.5,0],[0.855,0.855,0],[0.5,1,0],[0.145,0.855,0],[0,0.5,0]];pointerEvents=1;shape=mxgraph.cisco_safe.compositeIcon;bgIcon=ellipse;resIcon=mxgraph.cisco_safe.capability.distributed_denial_of_service_protection;',
  },
  _original_width: 43,
  _original_height: 43,
}

export function DistributedDenialOfServiceProtection(props: DiagramNodeProps) {
  return (
    <Shape
      {...DISTRIBUTED_DENIAL_OF_SERVICE_PROTECTION}
      {...props}
      _style={extendStyle(DISTRIBUTED_DENIAL_OF_SERVICE_PROTECTION, props)}
    />
  )
}
