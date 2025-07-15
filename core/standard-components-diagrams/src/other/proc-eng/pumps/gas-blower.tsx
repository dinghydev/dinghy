import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GAS_BLOWER = {
  _style:
    'shape=mxgraph.pid.pumps.gas_blower;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 72,
  _height: 67,
}

export function GasBlower(props: DiagramNodeProps) {
  return <Shape {...GAS_BLOWER} {...props} />
}
