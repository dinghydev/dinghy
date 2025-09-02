import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PMOS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.mosfets1.mosfet_ic_p;',
  },
  _original_width: 95,
  _original_height: 100,
}

export function Pmos(props: DiagramNodeProps) {
  return <Shape {...PMOS} {...props} _style={extendStyle(PMOS, props)} />
}
