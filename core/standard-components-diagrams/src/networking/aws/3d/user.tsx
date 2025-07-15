import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const USER = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.end_user;strokeColor=none;fillColor=#777777;aspect=fixed;',
  _width: 49,
  _height: 100.46,
}

export function User(props: DiagramNodeProps) {
  return <Shape {...USER} {...props} />
}
