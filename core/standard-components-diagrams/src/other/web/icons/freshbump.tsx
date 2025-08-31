import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FRESHBUMP = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.freshbump;fillColor=#695D5D;gradientColor=#100E0E',
  _width: 102.4,
  _height: 102.4,
}

export function Freshbump(props: DiagramNodeProps) {
  return (
    <Shape {...FRESHBUMP} {...props} _style={extendStyle(FRESHBUMP, props)} />
  )
}
