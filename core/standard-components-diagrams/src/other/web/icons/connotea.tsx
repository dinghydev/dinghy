import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CONNOTEA = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.connotea;fillColor=#E9FDFC;gradientColor=#BADBE9',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Connotea(props: DiagramNodeProps) {
  return (
    <Shape {...CONNOTEA} {...props} _style={extendStyle(CONNOTEA, props)} />
  )
}
