import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATABASE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.database;',
  },
  _original_width: 37.5,
  _original_height: 50,
}

export function Database(props: DiagramNodeProps) {
  return (
    <Shape {...DATABASE} {...props} _style={extendStyle(DATABASE, props)} />
  )
}
