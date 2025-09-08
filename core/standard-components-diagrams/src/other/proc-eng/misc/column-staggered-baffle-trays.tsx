import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COLUMN_STAGGERED_BAFFLE_TRAYS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid2misc.column;columnType=baffle',
  },
  _original_width: 50,
  _original_height: 120,
}

export function ColumnStaggeredBaffleTrays(props: DiagramNodeProps) {
  return (
    <Shape
      {...COLUMN_STAGGERED_BAFFLE_TRAYS}
      {...props}
      _style={extendStyle(COLUMN_STAGGERED_BAFFLE_TRAYS, props)}
    />
  )
}
