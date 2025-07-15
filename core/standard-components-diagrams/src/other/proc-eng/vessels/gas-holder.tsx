import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GAS_HOLDER = {
  _style:
    'shape=mxgraph.pid.vessels.gas_holder;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 70,
  _height: 95,
}

export function GasHolder(props: DiagramNodeProps) {
  return <Shape {...GAS_HOLDER} {...props} />
}
