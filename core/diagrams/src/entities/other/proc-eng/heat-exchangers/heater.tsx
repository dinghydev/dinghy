import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HEATER = {
  _style: {
    entity:
      'shape=mxgraph.pid.heat_exchangers.heater;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Heater(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, HEATER)} />
}
