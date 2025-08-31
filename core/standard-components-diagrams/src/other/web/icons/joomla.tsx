import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JOOMLA = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.joomla;fillColor=#1F457D;gradientColor=#081220',
  _width: 102.4,
  _height: 102.4,
}

export function Joomla(props: DiagramNodeProps) {
  return <Shape {...JOOMLA} {...props} _style={extendStyle(JOOMLA, props)} />
}
