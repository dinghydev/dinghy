import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WAREHOUSE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.warehouse;',
  },
  _width: 100,
  _height: 60,
}

export function Warehouse(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, WAREHOUSE)} />
}
