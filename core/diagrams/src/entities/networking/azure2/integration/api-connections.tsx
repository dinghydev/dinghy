import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const API_CONNECTIONS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/devops/API_Connections.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 45.32,
}

export function ApiConnections(props: NodeProps) {
  return (
    <Shape
      {...API_CONNECTIONS}
      {...props}
      _style={extendStyle(API_CONNECTIONS, props)}
    />
  )
}
