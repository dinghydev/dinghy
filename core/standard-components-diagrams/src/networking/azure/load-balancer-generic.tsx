import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOAD_BALANCER_GENERIC = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.load_balancer_generic;pointerEvents=1;',
  },
  _original_width: 37.5,
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
