import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const USERS = {
  _style:
    'sketch=0;outlineConnect=0;gradientColor=none;fontColor=#545B64;strokeColor=none;fillColor=#879196;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.illustration_users;pointerEvents=1',
  _width: 100,
  _height: 100,
}

export function Users(props: DiagramNodeProps) {
  return <Shape {...USERS} {...props} />
}
