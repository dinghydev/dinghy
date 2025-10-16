import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EDMODO = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.edmodo;fillColor=#2F81CE;gradientColor=#1F5487',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Edmodo(props: DiagramNodeProps) {
  return <Shape {...EDMODO} {...props} _style={extendStyle(EDMODO, props)} />
}
