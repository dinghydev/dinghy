import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GAS_BLOWER = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps.gas_blower;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 72,
  _original_height: 67,
}

export function GasBlower(props: DiagramNodeProps) {
  return (
    <Shape {...GAS_BLOWER} {...props} _style={extendStyle(GAS_BLOWER, props)} />
  )
}
