import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CURVED_GAS_VENT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.curved_gas_vent;pointerEvents=1;',
  },
  _width: 30,
  _height: 70,
}

export function CurvedGasVent(props: NodeProps) {
  return (
    <Shape
      {...CURVED_GAS_VENT}
      {...props}
      _style={extendStyle(CURVED_GAS_VENT, props)}
    />
  )
}
