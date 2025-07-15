import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HEAT_EXCHANGER_FINNED_TUBES_FAN = {
  _style:
    'shape=mxgraph.pid.heat_exchangers.heat_exchanger_(finned_tubes,_fan);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 100,
}

export function HeatExchangerFinnedTubesFan(props: DiagramNodeProps) {
  return <Shape {...HEAT_EXCHANGER_FINNED_TUBES_FAN} {...props} />
}
