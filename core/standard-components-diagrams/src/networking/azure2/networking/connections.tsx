import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONNECTIONS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Connections.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
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
