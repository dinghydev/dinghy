import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CUSTOMER_SUPPLIER = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.outside_sources;whiteSpace=wrap;align=center;',
  },
  _original_width: 100,
  _original_height: 70,
}

export function CustomerSupplier(props: DiagramNodeProps) {
  return (
    <Shape
      {...CUSTOMER_SUPPLIER}
      {...props}
      _style={extendStyle(CUSTOMER_SUPPLIER, props)}
    />
  )
}
