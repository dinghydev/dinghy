import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X_CONST = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.x',
  _width: 100,
  _height: 100,
}

export function X(props: DiagramNodeProps) {
  return <Shape {...X_CONST} {...props} />
}
