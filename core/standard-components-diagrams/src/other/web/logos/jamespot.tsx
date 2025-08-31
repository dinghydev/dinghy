import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JAMESPOT = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.jamespot;fillColor=#695D5D;gradientColor=#100E0E',
  _width: 60,
  _height: 60,
}

export function Jamespot(props: DiagramNodeProps) {
  return (
    <Shape {...JAMESPOT} {...props} _style={extendStyle(JAMESPOT, props)} />
  )
}
