import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LIQUID_JET = {
  _style:
    'shape=mxgraph.pid.pumps_-_din.liquid_jet;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 60,
  _height: 60,
}

export function LiquidJet(props: DiagramNodeProps) {
  return (
    <Shape {...LIQUID_JET} {...props} _style={extendStyle(LIQUID_JET, props)} />
  )
}
