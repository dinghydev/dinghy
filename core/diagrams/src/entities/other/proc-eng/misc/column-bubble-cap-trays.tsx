import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COLUMN_BUBBLE_CAP_TRAYS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid2misc.column;columnType=bubble',
  },
  _width: 50,
  _height: 120,
}

export function ColumnBubbleCapTrays(props: NodeProps) {
  return (
    <Shape
      {...COLUMN_BUBBLE_CAP_TRAYS}
      {...props}
      _style={extendStyle(COLUMN_BUBBLE_CAP_TRAYS, props)}
    />
  )
}
