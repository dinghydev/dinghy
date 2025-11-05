import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONNECTIONS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Connections.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function Connections(props: NodeProps) {
  return (
    <Shape
      {...CONNECTIONS}
      {...props}
      _style={extendStyle(CONNECTIONS, props)}
    />
  )
}
