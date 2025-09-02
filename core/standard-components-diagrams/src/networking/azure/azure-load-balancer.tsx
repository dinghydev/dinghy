import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZURE_LOAD_BALANCER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.azure_load_balancer;',
  },
  _original_width: 50,
  _original_height: 35,
}

export function AzureLoadBalancer(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZURE_LOAD_BALANCER}
      {...props}
      _style={extendStyle(AZURE_LOAD_BALANCER, props)}
    />
  )
}
