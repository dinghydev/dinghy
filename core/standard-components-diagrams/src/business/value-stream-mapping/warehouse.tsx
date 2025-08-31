import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WAREHOUSE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.warehouse;',
  },
  _width: 100,
  _height: 60,
}

export function Warehouse(props: DiagramNodeProps) {
  return (
    <Shape {...WAREHOUSE} {...props} _style={extendStyle(WAREHOUSE, props)} />
  )
}
