import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SERVER = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.server;',
  _width: 50,
  _height: 15,
}

export function Server(props: DiagramNodeProps) {
  return <Shape {...SERVER} {...props} />
}
