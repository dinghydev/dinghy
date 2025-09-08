import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INVERTER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.logic_gates.inverter_2',
  },
  _original_width: 100,
  _original_height: 60,
}

export function Inverter(props: DiagramNodeProps) {
  return (
    <Shape {...INVERTER} {...props} _style={extendStyle(INVERTER, props)} />
  )
}
