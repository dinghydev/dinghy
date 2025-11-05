import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COLUMN_FIXED_BED = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid2misc.column;columnType=fixed',
  },
  _width: 50,
  _height: 180,
}

export function ColumnFixedBed(props: NodeProps) {
  return (
    <Shape
      {...COLUMN_FIXED_BED}
      {...props}
      _style={extendStyle(COLUMN_FIXED_BED, props)}
    />
  )
}
