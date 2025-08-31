import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOAD_BALANCER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.load_balancer;',
  },
  _width: 59,
  _height: 39,
}

export function LoadBalancer(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOAD_BALANCER}
      {...props}
      _style={extendStyle(LOAD_BALANCER, props)}
    />
  )
}
