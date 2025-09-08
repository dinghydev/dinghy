import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LOAD_BALANCER_GENERIC = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.azure.load_balancer_generic',
  },
  _original_width: 37,
  _original_height: 50,
}

export function LoadBalancerGeneric(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOAD_BALANCER_GENERIC}
      {...props}
      _style={extendStyle(LOAD_BALANCER_GENERIC, props)}
    />
  )
}
