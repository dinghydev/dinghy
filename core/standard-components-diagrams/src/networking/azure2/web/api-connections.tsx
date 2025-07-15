import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const API_CONNECTIONS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/devops/API_Connections.svg;',
  _width: 68,
  _height: 45.32,
}

export function ApiConnections(props: DiagramNodeProps) {
  return <Shape {...API_CONNECTIONS} {...props} />
}
