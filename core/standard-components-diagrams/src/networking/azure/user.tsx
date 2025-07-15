import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const USER = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.user;',
  _width: 47.5,
  _height: 50,
}

export function User(props: DiagramNodeProps) {
  return <Shape {...USER} {...props} />
}
