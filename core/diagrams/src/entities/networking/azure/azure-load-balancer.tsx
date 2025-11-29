import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AZURE_LOAD_BALANCER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.azure_load_balancer;',
  },
  _width: 50,
  _height: 35,
}

export function AzureLoadBalancer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, AZURE_LOAD_BALANCER)} />
}
