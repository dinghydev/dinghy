import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COLUMN_FLUIDIZED_BED = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid2misc.column;columnType=fluid',
  },
  _width: 50,
  _height: 120,
}

export function ColumnFluidizedBed(props: DiagramNodeProps) {
  return (
    <Shape
      {...COLUMN_FLUIDIZED_BED}
      {...props}
      _style={extendStyle(COLUMN_FLUIDIZED_BED, props)}
    />
  )
}
