import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MOSFET_NO_BULK_P = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.mosfets1.mosfet_p_no_bulk;',
  _width: 95,
  _height: 100,
}

export function MosfetNoBulkP(props: DiagramNodeProps) {
  return <Shape {...MOSFET_NO_BULK_P} {...props} />
}
