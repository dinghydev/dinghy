import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TABLE = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.table;',
  _width: 50.8,
  _height: 50.8,
}

export function Table(props: DiagramNodeProps) {
  return <Shape {...TABLE} {...props} />
}
