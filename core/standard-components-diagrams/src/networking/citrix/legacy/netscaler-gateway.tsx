import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NETSCALER_GATEWAY = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.netscaler_gateway;',
  },
  _width: 100,
  _height: 39,
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
