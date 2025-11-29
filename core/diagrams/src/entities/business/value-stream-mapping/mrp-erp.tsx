import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MRP_ERP = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.mrp_erp;whiteSpace=wrap;',
  },
  _width: 70,
  _height: 100,
}

export function MrpErp(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MRP_ERP)} />
}
