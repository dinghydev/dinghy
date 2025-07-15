import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONE = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.cone',
  _width: 100,
  _height: 100,
}

export function Cone(props: DiagramNodeProps) {
  return <Shape {...CONE} {...props} />
}
