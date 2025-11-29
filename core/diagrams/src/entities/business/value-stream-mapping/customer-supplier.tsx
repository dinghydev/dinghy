import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CUSTOMER_SUPPLIER = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.outside_sources;whiteSpace=wrap;align=center;',
  },
  _width: 100,
  _height: 70,
}

export function CustomerSupplier(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CUSTOMER_SUPPLIER)} />
}
