import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONNECTIONS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Connections.svg;',
  _width: 50,
  _height: 50,
}

export function Connections(props: DiagramNodeProps) {
  return <Shape {...CONNECTIONS} {...props} />
}
