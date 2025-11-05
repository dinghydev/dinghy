import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GAS_BOTTLE = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.gas_bottle;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 35,
  _height: 95,
}

export function GasBottle(props: NodeProps) {
  return (
    <Shape {...GAS_BOTTLE} {...props} _style={extendStyle(GAS_BOTTLE, props)} />
  )
}
