import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GAS_BLOWER = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps.gas_blower;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 72,
  _original_height: 67,
}

export function GasBlower(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, GAS_BLOWER)} />
}
