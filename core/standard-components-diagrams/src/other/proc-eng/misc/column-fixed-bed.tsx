import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COLUMN_FIXED_BED = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid2misc.column;columnType=fixed',
  _width: 50,
  _height: 180,
}

export function ColumnFixedBed(props: DiagramNodeProps) {
  return <Shape {...COLUMN_FIXED_BED} {...props} />
}
