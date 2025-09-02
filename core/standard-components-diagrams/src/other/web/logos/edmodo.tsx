import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EDMODO = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.edmodo;fillColor=#276CB0;strokeColor=none',
  },
  _original_width: 69.2,
  _original_height: 73.8,
}

export function Edmodo(props: DiagramNodeProps) {
  return <Shape {...EDMODO} {...props} _style={extendStyle(EDMODO, props)} />
}
