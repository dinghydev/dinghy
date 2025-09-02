import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const YAMMER = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.yammer;fillColor=#0093BE;strokeColor=none',
  },
  _original_width: 69.60000000000001,
  _original_height: 59.6,
}

export function Yammer(props: DiagramNodeProps) {
  return <Shape {...YAMMER} {...props} _style={extendStyle(YAMMER, props)} />
}
