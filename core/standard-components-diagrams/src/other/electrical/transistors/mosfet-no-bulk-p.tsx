import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MOSFET_NO_BULK_P = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.mosfets1.mosfet_p_no_bulk;',
  },
  _original_width: 95,
  _original_height: 100,
}

export function MosfetNoBulkP(props: DiagramNodeProps) {
  return (
    <Shape
      {...MOSFET_NO_BULK_P}
      {...props}
      _style={extendStyle(MOSFET_NO_BULK_P, props)}
    />
  )
}
