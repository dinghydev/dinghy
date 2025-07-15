import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TABLE = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.table;fillColor=#2E73B8;gradientColor=none;',
  _width: 67.5,
  _height: 66,
}

export function Table(props: DiagramNodeProps) {
  return <Shape {...TABLE} {...props} />
}
