import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X_CONST = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.x',
  _width: 60,
  _height: 60,
}

export function X(props: DiagramNodeProps) {
  return <Shape {...X_CONST} {...props} _style={extendStyle(X_CONST, props)} />
}
