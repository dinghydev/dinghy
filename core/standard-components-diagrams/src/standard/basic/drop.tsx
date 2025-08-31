import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DROP = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.drop',
  _width: 70,
  _height: 100,
}

export function Drop(props: DiagramNodeProps) {
  return <Shape {...DROP} {...props} _style={extendStyle(DROP, props)} />
}
