import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GAS_BOTTLE = {
  _style:
    'shape=mxgraph.pid.vessels.gas_bottle;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 35,
  _height: 95,
}

export function GasBottle(props: DiagramNodeProps) {
  return <Shape {...GAS_BOTTLE} {...props} />
}
