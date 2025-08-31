import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MRP_ERP = {
  _style:
    'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.mrp_erp;whiteSpace=wrap;',
  _width: 70,
  _height: 100,
}

export function MrpErp(props: DiagramNodeProps) {
  return <Shape {...MRP_ERP} {...props} _style={extendStyle(MRP_ERP, props)} />
}
