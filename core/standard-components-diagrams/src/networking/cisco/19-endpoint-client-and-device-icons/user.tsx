import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const USER = {
  _style:
    'points=[[0.35,0,0],[0.98,0.51,0],[1,0.71,0],[0.67,1,0],[0,0.795,0],[0,0.65,0]];verticalLabelPosition=bottom;sketch=0;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.user;fillColor=#005073;strokeColor=none;',
  _width: 50,
  _height: 50,
}

export function User(props: DiagramNodeProps) {
  return <Shape {...USER} {...props} />
}
