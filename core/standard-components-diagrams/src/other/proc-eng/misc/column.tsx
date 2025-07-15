import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COLUMN = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid2misc.column;columnType=common',
  _width: 50,
  _height: 120,
}

export function Column(props: DiagramNodeProps) {
  return <Shape {...COLUMN} {...props} />
}
