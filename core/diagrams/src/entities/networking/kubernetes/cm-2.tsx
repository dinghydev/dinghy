import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CM_2 = {
  _style: {
    entity:
      'aspect=fixed;sketch=0;html=1;dashed=0;whitespace=wrap;verticalLabelPosition=bottom;verticalAlign=top;fillColor=#2875E2;strokeColor=#ffffff;points=[[0.005,0.63,0],[0.1,0.2,0],[0.9,0.2,0],[0.5,0,0],[0.995,0.63,0],[0.72,0.99,0],[0.5,1,0],[0.28,0.99,0]];shape=mxgraph.kubernetes.icon2;kubernetesLabel=1;prIcon=cm',
  },
  _original_width: 50,
  _original_height: 48,
}

export function Cm2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CM_2)} />
}
