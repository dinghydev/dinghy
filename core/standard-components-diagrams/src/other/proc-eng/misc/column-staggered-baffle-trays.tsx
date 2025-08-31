import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COLUMN_STAGGERED_BAFFLE_TRAYS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid2misc.column;columnType=baffle',
  },
  _width: 50,
  _height: 120,
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
