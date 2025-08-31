import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JAMESPOT = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.jamespot;fillColor=#695D5D;gradientColor=#100E0E',
  },
  _width: 102.4,
  _height: 102.4,
}

export function Jamespot(props: DiagramNodeProps) {
  return (
    <Shape {...JAMESPOT} {...props} _style={extendStyle(JAMESPOT, props)} />
  )
}
