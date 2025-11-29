import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NETSCALER_GATEWAY = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.netscaler_gateway;',
  },
  _original_width: 50,
  _original_height: 44.714999999999996,
}

export function NetscalerGateway(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, NETSCALER_GATEWAY)} />
}
