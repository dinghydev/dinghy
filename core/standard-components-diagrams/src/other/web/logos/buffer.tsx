import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUFFER = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.buffer;fillColor=#221F1F;strokeColor=none',
  _width: 70.4,
  _height: 60.400000000000006,
}

export function Buffer(props: DiagramNodeProps) {
  return <Shape {...BUFFER} {...props} _style={extendStyle(BUFFER, props)} />
}
