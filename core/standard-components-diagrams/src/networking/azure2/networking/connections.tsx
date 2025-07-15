import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONNECTIONS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Connections.svg;',
  _width: 68,
  _height: 68,
}

export function Connections(props: DiagramNodeProps) {
  return <Shape {...CONNECTIONS} {...props} />
}
