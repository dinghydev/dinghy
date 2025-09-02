import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONNECTIONS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Connections.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function Connections(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONNECTIONS}
      {...props}
      _style={extendStyle(CONNECTIONS, props)}
    />
  )
}
