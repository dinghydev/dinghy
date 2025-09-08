import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NETSCALER_GATEWAY = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.netscaler_gateway;',
  },
  _original_width: 100,
  _original_height: 39,
}

export function NetscalerGateway(props: DiagramNodeProps) {
  return (
    <Shape
      {...NETSCALER_GATEWAY}
      {...props}
      _style={extendStyle(NETSCALER_GATEWAY, props)}
    />
  )
}
