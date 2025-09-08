import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MRP_ERP = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.mrp_erp;whiteSpace=wrap;',
  },
  _original_width: 70,
  _original_height: 100,
}

export function MrpErp(props: DiagramNodeProps) {
  return <Shape {...MRP_ERP} {...props} _style={extendStyle(MRP_ERP, props)} />
}
