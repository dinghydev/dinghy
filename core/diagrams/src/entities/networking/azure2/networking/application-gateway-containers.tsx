import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const APPLICATION_GATEWAY_CONTAINERS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Application_Gateway_Containers.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 64.24,
}

export function ApplicationGatewayContainers(props: NodeProps) {
  return (
    <Shape
      {...APPLICATION_GATEWAY_CONTAINERS}
      {...props}
      _style={extendStyle(APPLICATION_GATEWAY_CONTAINERS, props)}
    />
  )
}
