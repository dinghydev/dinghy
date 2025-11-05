import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MOSFET_NO_BULK_N = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.mosfets1.mosfet_n_no_bulk;',
  },
  _original_width: 95,
  _original_height: 100,
}

export function MosfetNoBulkN(props: NodeProps) {
  return (
    <Shape
      {...MOSFET_NO_BULK_N}
      {...props}
      _style={extendStyle(MOSFET_NO_BULK_N, props)}
    />
  )
}
