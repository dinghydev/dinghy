import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const APPLICATION_GATEWAY_CONTAINERS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Application_Gateway_Containers.svg;',
  _width: 68,
  _height: 64.24,
}

export function ApplicationGatewayContainers(props: DiagramNodeProps) {
  return <Shape {...APPLICATION_GATEWAY_CONTAINERS} {...props} />
}
