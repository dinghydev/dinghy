import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WAREHOUSE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.warehouse;',
  _width: 100,
  _height: 60,
}

export function Warehouse(props: DiagramNodeProps) {
  return <Shape {...WAREHOUSE} {...props} />
}
