import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FRAME = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.frame;dx=10;whiteSpace=wrap;',
  _width: 100,
  _height: 60,
}

export function Frame(props: DiagramNodeProps) {
  return <Shape {...FRAME} {...props} _style={extendStyle(FRAME, props)} />
}
