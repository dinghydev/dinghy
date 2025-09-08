import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OR_IEC = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.iec_logic_gates.or;',
  },
  _original_width: 60,
  _original_height: 80,
}

export function OrIec(props: DiagramNodeProps) {
  return <Shape {...OR_IEC} {...props} _style={extendStyle(OR_IEC, props)} />
}
