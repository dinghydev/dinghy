import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const THERMOCOUPLE = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.thermocouple;',
  },
  _original_width: 80,
  _original_height: 81,
}

export function Thermocouple(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, THERMOCOUPLE)} />
}
