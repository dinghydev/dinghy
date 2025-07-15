import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LIQUID_JET = {
  _style:
    'shape=mxgraph.pid.pumps_-_din.liquid_jet;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 100,
}

export function LiquidJet(props: DiagramNodeProps) {
  return <Shape {...LIQUID_JET} {...props} />
}
