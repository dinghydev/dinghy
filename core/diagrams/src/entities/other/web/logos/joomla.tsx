import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JOOMLA = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.joomla;fillColor=#1F457D;gradientColor=#081220',
  },
  _original_width: 66,
  _original_height: 65.60000000000001,
}

export function Joomla(props: DiagramNodeProps) {
  return <Shape {...JOOMLA} {...props} _style={extendStyle(JOOMLA, props)} />
}
